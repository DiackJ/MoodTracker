package com.springboot.MoodTrackerBack;

import com.springboot.MoodTrackerBack.DTO.AverageMoodSleepDTO;
import com.springboot.MoodTrackerBack.DTO.CompositeDTO;
import com.springboot.MoodTrackerBack.DTO.DailyLogDTO;
import com.springboot.MoodTrackerBack.DTO.FeelingsDTO;
import com.springboot.MoodTrackerBack.Entity.DailyLog;
import com.springboot.MoodTrackerBack.Entity.Feelings;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.DailyLogsRepository;
import com.springboot.MoodTrackerBack.Repository.FeelingsRepository;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import com.springboot.MoodTrackerBack.Service.LogService;
import com.springboot.MoodTrackerBack.Service.UserService;
import com.springboot.MoodTrackerBack.Util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class ServiceController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DailyLogsRepository dailyLogsRepository;
    @Autowired
    private FeelingsRepository feelingsRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private LogService logService;
    @Autowired
    private UserService userService;

    //get the user's information (email, name, gender, etc.)
    @GetMapping("/user")
    public ResponseEntity<User> userInfo(HttpServletRequest req){
        User user = userService.getUserInfo(req);

        return new ResponseEntity<>(user, HttpStatus.OK); //return user info
    }

    @PostMapping("/log-mood")
    public ResponseEntity<String> logMood(@RequestBody CompositeDTO compositeDTO, HttpServletRequest req){
        DailyLogDTO dailyLogDTO = compositeDTO.getDailyLog();
        User user = userService.getUserInfo(req);

        DailyLog dailyLog = logService.mapToDailyLogDTO(dailyLogDTO, user);

        List<Feelings> feels = logService.mapToFeelingsDTO(compositeDTO, dailyLog);

        dailyLog.setFeelings(feels);
        dailyLogsRepository.save(dailyLog);

        return new ResponseEntity<>("mood logged", HttpStatus.OK);
    }

    @GetMapping("/average-mood-sleep")
    public ResponseEntity<AverageMoodSleepDTO> userAverages(HttpServletRequest req){
        User user = userService.getUserInfo(req);
        System.out.println("user id: " + user.getId()); //should return 12

        long averageMood = logService.getAverageMood(user.getId());
        long averageSleep = logService.getAverageSleep(user.getId());

        AverageMoodSleepDTO dto = new AverageMoodSleepDTO(averageMood, averageSleep);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
}
