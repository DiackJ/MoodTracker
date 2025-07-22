package com.springboot.MoodTrackerBack.SecurityConfig;

import com.springboot.MoodTrackerBack.Util.JwtAuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final JwtAuthFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(JwtAuthFilter jwtAuthFilter, UserDetailsService userDetailsService){
        this.jwtAuthFilter = jwtAuthFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .cors(Customizer.withDefaults()) //tells spring to use cors config bean
                .csrf(c -> c.disable())
                .formLogin(f -> f.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll()
                        .anyRequest().authenticated()
                )
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider((authenticationProvider()))
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    //password encryption
    @Bean
    public PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(encoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }

    //CORS configuration to allow frontend requests
    @Bean
    public CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:5173")); //frontend request origin (must be defined if using cookies/tokens/auth headers)
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); //methods the backend can accept (options is required for preflight requests like fetch())
        config.setAllowedHeaders(List.of("*")); //allows any kind of header like Authorization, Content Type, etc.
        config.setAllowCredentials(true); //for cookies and auth headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); //tells spring to apply this cors config to all api endpoints
        return source; //returns fully built cors config to use in security filter chain
    }
    //kind of like saying:
    //hey spring, allow requests from localhost:5173 using methods like GET with any headers and also allow cookies and
    //tokens to be sent too. and apply this rule to all backend endpoints!
}
