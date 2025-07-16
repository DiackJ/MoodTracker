package com.springboot.MoodTrackerBack.Util;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;

    @Autowired
    public JwtAuthFilter(UserDetailsService userDetailsService, JwtUtil jwtUtil){
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException{
        //skip public paths
        String path = req.getServletPath();
        if(path.startsWith("/auth/signup") || path.startsWith("/auth/login")){
            chain.doFilter(req, res);
            return;
        }

        String token = null;
        String username = null;

        //parsing cookies
        if(req.getCookies() != null){
            for(Cookie cookie : req.getCookies()){
                if(cookie.getName().equals("jwt")){
                    token = cookie.getValue();
                    username = jwtUtil.extractSubject(token);
                }
            }
        }

        //check that email is not null and security context holder doesn't already hold current user
        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
            //load the user
            UserDetails user = userDetailsService.loadUserByUsername(username);
            //if the user's token is valid, parse and authenticate the user
            if(jwtUtil.isTokenValid(token, user)){
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        user,
                        null,
                        user.getAuthorities()
                );
                //add the user to the security context holder
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        chain.doFilter(req,res);
    }
}
