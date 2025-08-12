package com.springboot.MoodTrackerBack.Repository;

import com.springboot.MoodTrackerBack.Entity.Feelings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeelingsRepository extends JpaRepository<Feelings, Long> {
}
