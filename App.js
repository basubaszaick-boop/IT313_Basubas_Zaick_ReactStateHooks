import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

/* =========================
   Custom Hook: useStopwatch
   ========================= */

function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((currentSeconds) => currentSeconds + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return seconds;
}

/* =========================
   PracticeTracker Component
   ========================= */

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        Practice Tracker
      </Text>

      <Text style={styles.solvedText}>
        Solved: {solved}
      </Text>

      {solved >= 5 && (
        <Text style={styles.greatJob}>
          Great job!
        </Text>
      )}

      <View style={styles.buttonSpacing}>
        <Button
          title="Solve +1"
          onPress={onSolve}
        />
      </View>

      <Button
        title="Reset"
        onPress={onReset}
      />
    </View>
  );
}

/* =========================
   Stopwatch Component
   ========================= */

function Stopwatch({
  seconds,
  isRunning,
}) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(remainingSeconds).padStart(2, "0")}`;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        Lab Stopwatch
      </Text>

      <Text style={styles.timer}>
        {formattedTime}
      </Text>

      {isRunning ? (
        <Text style={styles.running}>
          Running...
        </Text>
      ) : (
        <Text style={styles.paused}>
          Paused
        </Text>
      )}
    </View>
  );
}

/* =========================
   LabScreen Component
   ========================= */

function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lab Timer & Practice Tracker
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <View style={styles.buttonSpacing}>
          <Button
            title="Start"
            onPress={handleStart}
          />
        </View>

        <Button
          title="Stop"
          onPress={handleStop}
        />
      </View>
    </View>
  );
}

/* =========================
   App
   ========================= */

export default function App() {
  return <LabScreen />;
}

/* =========================
   Styles
   ========================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },

  solvedText: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 8,
  },

  greatJob: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  timer: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  running: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  paused: {
    fontSize: 18,
    textAlign: "center",
  },

  controls: {
    marginTop: 5,
  },

  buttonSpacing: {
    marginBottom: 10,
  },
});