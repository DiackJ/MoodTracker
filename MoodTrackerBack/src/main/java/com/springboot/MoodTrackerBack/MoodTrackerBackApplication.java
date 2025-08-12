package com.springboot.MoodTrackerBack;

import com.springboot.MoodTrackerBack.Config.EnvLoader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MoodTrackerBackApplication {
		static{
			EnvLoader.loadEnv();
		}

	public static void main(String[] args) {
		SpringApplication.run(MoodTrackerBackApplication.class, args);
	}

}
