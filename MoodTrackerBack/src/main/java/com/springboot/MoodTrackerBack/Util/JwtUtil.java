package com.springboot.MoodTrackerBack.Util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.lang.Function;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

//create and generate the JWT token
@Component
public class JwtUtil {
    @Value("${JWT_SECRET}")
    private String key;

    //create token
    public String createToken(Map<String, Object> claims, String email){
        return Jwts.builder()
                .claims(claims)
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(Keys.hmacShaKeyFor(key.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)
                .compact();
    }

    //generate the token
    public String generateToken(String email){
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, email);
    }

    //extract all claims from payload
    public Claims extractAllClaims(String token){
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(key.getBytes(StandardCharsets.UTF_8)))
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    //helper method for extracting individual claims
    public <T> T extractClaim(String token, Function<Claims, T> resolver){
        final Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    //get the token subject
    public String extractSubject(String token){
        return extractClaim(token, Claims::getSubject);
    }

    //get the token expiration
    public Date extractExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }

    //validate token is non expired
    public Boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    //valid token is non expired and belongs to user
    public Boolean isTokenValid(String token, UserDetails userDetails){
        String username = extractSubject(token);
        return (!isTokenExpired(token) && username.equals(userDetails.getUsername()));
    }
}
