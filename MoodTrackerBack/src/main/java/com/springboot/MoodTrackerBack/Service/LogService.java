package com.springboot.MoodTrackerBack.Service;

import com.springboot.MoodTrackerBack.DTO.CompositeDTO;
import com.springboot.MoodTrackerBack.DTO.DailyLogDTO;
import com.springboot.MoodTrackerBack.DTO.FeelingsDTO;
import com.springboot.MoodTrackerBack.DTO.MoodSleepDTO;
import com.springboot.MoodTrackerBack.Entity.DailyLog;
import com.springboot.MoodTrackerBack.Entity.Feelings;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.DailyLogsRepository;
import com.springboot.MoodTrackerBack.Repository.FeelingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;


@Service
public class LogService {
    private final DailyLogsRepository dailyLogsRepository;
    private final FeelingsRepository feelingsRepository;

    @Autowired
    public LogService(DailyLogsRepository logsRepository, FeelingsRepository feelingsRepository){
        this.dailyLogsRepository = logsRepository;
        this.feelingsRepository = feelingsRepository;
    }

    //map daily log input to daily log dto
    public DailyLog mapToDailyLogDTO(DailyLogDTO log, User user){
        DailyLog dailyLog = new DailyLog();

        dailyLog.setEntryDate(new Date());
        dailyLog.setUser(user);
        dailyLog.setReflection(log.getReflection());
        dailyLog.setMood(log.getMood());
        dailyLog.setMinSleep(log.getMinSleep());
        dailyLog.setMaxSleep(log.getMaxSleep());

        return dailyLogsRepository.save(dailyLog);
    }

    //map feelings input to feelings dto
    public List<Feelings> mapToFeelingsDTO(CompositeDTO compDTO, DailyLog log){
        //map each string from request array to a Feelings object
        List<Feelings> feelingsList = compDTO.getFeelings().stream().map(f -> {
            Feelings feelings = new Feelings();
            feelings.setEntryDate(new Date());
            feelings.setDailyLog(log);
            feelings.setFeeling(f);
            return feelings;
        }).toList();

        return feelingsRepository.saveAll(feelingsList);
    }

    public long getAverageMood(Long userId){
        List<DailyLog> logs = dailyLogsRepository.getOrderedLogs(userId);
    //extract the moods only from the user's logs in order of recency, limit to top 5, and average
        if(logs.size() < 5){
            return 0;
        }
        double avgMood = logs.stream().limit(5).mapToInt(DailyLog::getMood).average().orElse(0);
        return Math.round(avgMood);
    }

    public long getAverageSleep(Long userId){
        List<DailyLog> logs = dailyLogsRepository.getOrderedLogs(userId);
    //extract only the min & max sleep from the user's ordered logs, limit it to 5, average each range, then average the total
        if(logs.size() < 5){ //ensures an average will only be returned once the user has at least 5 logs
            return 0;
        }
        double avgSleep = logs.stream().limit(5).mapToInt(log -> (log.getMinSleep() + log.getMaxSleep()) / 2)
                .average().orElse(0);
        return Math.round(avgSleep);
    }

    public List<MoodSleepDTO> getLoggedMoods(long userId){
        List<DailyLog> logs = dailyLogsRepository.getOrderedLogs(userId);

        return logs.stream().map(log -> new MoodSleepDTO(
                log.getMood(),
                (log.getMinSleep() + log.getMaxSleep()) / 2,
                log.getEntryDate().toInstant()
                        .atOffset(ZoneOffset.UTC)
                        .format(DateTimeFormatter.ofPattern("MMM d")) //format date to only return m/d
        )).toList();
    }
}
