package com.springboot.MoodTrackerBack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.springboot.MoodTrackerBack.Entity.DailyLog;

import java.util.List;

@Repository
public interface DailyLogsRepository extends JpaRepository<DailyLog, Long> {
    //get the logs from a user in order by newest date first
    @Query("SELECT l FROM DailyLog l WHERE l.user.id = :userId ORDER BY l.entryDate DESC")
    List<DailyLog> getOrderedLogs(@Param("userId") Long userId);
}
