import React, { useState, useEffect } from "react";
import { Dumbbell, Play, Pause, RotateCcw, Plus, CheckCircle2, ChevronRight, Activity, ArrowUpRight, Flame, Zap, Snowflake } from "lucide-react";
import { EXERCISE_LIBRARY, INITIAL_WORKOUT_SETS, WorkoutSet, ExerciseItem } from "../data/mockData";

export const WorkoutsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeExercise, setActiveExercise] = useState<ExerciseItem>(EXERCISE_LIBRARY[0]);
  const [sets, setSets] = useState<WorkoutSet[]>(INITIAL_WORKOUT_SETS);
  const [activeSetIndex, setActiveSetIndex] = useState<number>(3); // currently on set 4
  
  // Rest Timer State
  const [restTimerSeconds, setRestTimerSeconds] = useState<number>(90);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [initialRestDuration, setInitialRestDuration] = useState<number>(90);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && restTimerSeconds > 0) {
      interval = setInterval(() => {
        setRestTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (restTimerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, restTimerSeconds]);

  const handleToggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = (seconds: number = initialRestDuration) => {
    setIsTimerRunning(false);
    setRestTimerSeconds(seconds);
  };

  const handleUpdateSet = (index: number, field: keyof WorkoutSet, value: number | boolean) => {
    setSets((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleCompleteSet = (index: number) => {
    setSets((prev) => {
      const updated = [...prev];
      const willComplete = !updated[index].completed;
      updated[index] = {
        ...updated[index],
        completed: willComplete,
        actualRpe: willComplete ? (updated[index].actualRpe || updated[index].targetRpe) : 0,
        velocity: willComplete ? (updated[index].velocity || 0.65) : 0
      };
      return updated;
    });

    // Start rest timer automatically when completing set
    if (!sets[index].completed) {
      handleResetTimer(90);
      setIsTimerRunning(true);
      if (index < sets.length - 1) {
        setActiveSetIndex(index + 1);
      }
    }
  };

  const handleAddSet = () => {
    const lastSet = sets[sets.length - 1];
    const newSet: WorkoutSet = {
      setNumber: sets.length + 1,
      weightKg: lastSet ? lastSet.weightKg : 100,
      reps: lastSet ? lastSet.reps : 3,
      targetRpe: 9.0,
      actualRpe: 0,
      velocity: 0,
      completed: false
    };
    setSets([...sets, newSet]);
  };

  const filteredExercises = selectedCategory === "All"
    ? EXERCISE_LIBRARY
    : EXERCISE_LIBRARY.filter((item) => item.category === selectedCategory);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full min-h-screen bg-[#111317] pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#caf300] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">
              <span>[ MODULE 02 ]</span>
              <span>•</span>
              <span>KINETIC WORKOUT & MOVEMENT ENGINE</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              Workouts & Movement Syllabus
            </h1>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Real-time kinematic execution recorder. Log velocity, mechanical load, and RPE with micro-interval rest timers.
            </p>
          </div>

          {/* Quick Rest Timer HUD */}
          <div className="bg-[#1e2023] rounded-xl p-4 border border-white/[0.08] flex items-center gap-5 shadow-xl shrink-0">
            <div>
              <div className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#94a3b8]">
                Rest Interval Pacer
              </div>
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
                {formatTimer(restTimerSeconds)}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleToggleTimer}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                  isTimerRunning
                    ? "bg-[#282a2d] text-[#caf300] border border-[#caf300]/40"
                    : "bg-[#caf300] text-[#171e00] hover:scale-105"
                }`}
              >
                {isTimerRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={() => handleResetTimer(90)}
                className="w-9 h-9 rounded-lg bg-[#282a2d] hover:bg-white hover:text-[#111317] text-[#94a3b8] flex items-center justify-center transition-colors cursor-pointer border border-white/[0.05]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Split: Active Logger vs Movement Syllabus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Active Kinetic Set Logger */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
              {/* Active Exercise Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div className="flex flex-col gap-1">
                  <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                    Current Lift Protocol • Sector A-01
                  </span>
                  <h2 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                    {activeExercise.name}
                  </h2>
                  <p className="text-xs text-[#94a3b8]">
                    {activeExercise.equipment}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#282a2d] text-white text-[11px] font-['Space_Grotesk'] font-bold uppercase">
                    Target: {activeExercise.velocityTarget}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#caf300]/10 text-[#caf300] text-[11px] font-['Space_Grotesk'] font-bold uppercase border border-[#caf300]/20">
                    {activeExercise.category}
                  </span>
                </div>
              </div>

              {/* Set Table with Kinetic Indicator Ticks */}
              <div className="flex flex-col gap-1">
                <div className="grid grid-cols-12 gap-2 text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#94a3b8] pb-2 px-3">
                  <span className="col-span-2">Set</span>
                  <span className="col-span-3">Load (KG)</span>
                  <span className="col-span-2">Reps</span>
                  <span className="col-span-2">Target RPE</span>
                  <span className="col-span-2 text-right">Velocity</span>
                  <span className="col-span-1 text-center">Done</span>
                </div>

                {sets.map((set, idx) => {
                  const isActive = activeSetIndex === idx;

                  return (
                    <div
                      key={set.setNumber}
                      onClick={() => setActiveSetIndex(idx)}
                      className={`relative grid grid-cols-12 gap-2 items-center p-3 rounded-lg border transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#282a2d] border-[#caf300]/40 shadow-sm"
                          : set.completed
                          ? "bg-[#1a1c1f]/80 border-white/[0.04] text-white"
                          : "bg-[#1a1c1f]/40 border-transparent hover:bg-[#1f242e]"
                      }`}
                    >
                      {/* Left Kinetic Indicator Tick */}
                      {isActive && (
                        <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#caf300] rounded-r" />
                      )}

                      {/* Set Number */}
                      <div className="col-span-2 flex items-center gap-1.5 pl-1">
                        <span className="font-['Space_Grotesk'] text-xs font-bold text-white">
                          #{set.setNumber}
                        </span>
                        {isActive && (
                          <span className="text-[9px] font-['Space_Grotesk'] font-bold text-[#caf300] uppercase">
                            LIVE
                          </span>
                        )}
                      </div>

                      {/* Weight KG Input */}
                      <div className="col-span-3">
                        <div className="flex items-center gap-1 bg-[#0c0e11] px-2 py-1.5 rounded border border-white/[0.1] focus-within:border-[#caf300]">
                          <input
                            type="number"
                            value={set.weightKg}
                            onChange={(e) =>
                              handleUpdateSet(idx, "weightKg", parseFloat(e.target.value) || 0)
                            }
                            className="w-full bg-transparent text-white font-['Space_Grotesk'] font-bold text-xs focus:outline-none tabular-nums"
                          />
                          <span className="text-[10px] text-[#94a3b8] font-bold">KG</span>
                        </div>
                      </div>

                      {/* Reps Input */}
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={set.reps}
                          onChange={(e) =>
                            handleUpdateSet(idx, "reps", parseInt(e.target.value) || 0)
                          }
                          className="w-full bg-[#0c0e11] text-white font-['Space_Grotesk'] font-bold text-xs px-2 py-1.5 rounded border border-white/[0.1] focus:outline-none focus:border-[#caf300] text-center tabular-nums"
                        />
                      </div>

                      {/* Target RPE Input */}
                      <div className="col-span-2">
                        <input
                          type="number"
                          step="0.5"
                          value={set.targetRpe}
                          onChange={(e) =>
                            handleUpdateSet(idx, "targetRpe", parseFloat(e.target.value) || 0)
                          }
                          className="w-full bg-[#0c0e11] text-white font-['Space_Grotesk'] font-bold text-xs px-2 py-1.5 rounded border border-white/[0.1] focus:outline-none focus:border-[#caf300] text-center tabular-nums"
                        />
                      </div>

                      {/* Velocity Display */}
                      <div className="col-span-2 text-right">
                        <span className="font-['Space_Grotesk'] text-xs font-bold text-[#caf300] tabular-nums">
                          {set.velocity > 0 ? `${set.velocity} m/s` : "—"}
                        </span>
                      </div>

                      {/* Complete Checkbox */}
                      <div className="col-span-1 flex justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCompleteSet(idx);
                          }}
                          className={`w-6 h-6 rounded flex items-center justify-center transition-all cursor-pointer ${
                            set.completed
                              ? "bg-[#caf300] text-[#171e00]"
                              : "border border-white/[0.2] hover:border-[#caf300] text-transparent hover:text-[#caf300]"
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add Set Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleAddSet}
                  className="inline-flex items-center gap-1.5 text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#94a3b8] hover:text-[#caf300] transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Kinetic Set</span>
                </button>

                <div className="text-xs text-[#94a3b8] font-['Space_Grotesk']">
                  Total Volume:{" "}
                  <span className="text-white font-bold">
                    {sets
                      .filter((s) => s.completed)
                      .reduce((acc, curr) => acc + curr.weightKg * curr.reps, 0)
                      .toLocaleString()}{" "}
                    KG
                  </span>
                </div>
              </div>

              {/* Kinematic Coaching Cues Callout */}
              <div className="bg-[#1a1c1f] p-4 rounded-xl border border-white/[0.06] flex flex-col gap-2">
                <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-wider text-[#caf300]">
                  Head Coach Kinematic Cues:
                </span>
                <ul className="space-y-1.5">
                  {activeExercise.cues.map((cue, i) => (
                    <li key={i} className="text-xs text-[#e2e2e6] flex items-start gap-2">
                      <span className="text-[#caf300] font-bold">•</span>
                      <span>{cue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Movement Syllabus Library */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1e2023] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest text-[#caf300]">
                  Biomechanics Database
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white">
                  Movement Syllabus
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  Select an exercise to calibrate load specs and view angular cues.
                </p>
              </div>

              {/* Category Segmented Controls */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#1a1c1f] rounded-lg border border-white/[0.06]">
                {["All", "Strength", "Metabolic", "Agility", "Recovery"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#caf300] text-[#171e00]"
                        : "text-[#94a3b8] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Exercise List */}
              <div className="flex flex-col gap-2.5 max-h-[520px] overflow-y-auto pr-1">
                {filteredExercises.map((exercise) => {
                  const isSelected = activeExercise.id === exercise.id;

                  return (
                    <div
                      key={exercise.id}
                      onClick={() => setActiveExercise(exercise)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-[#282a2d] border-[#caf300] shadow-md"
                          : "bg-[#1a1c1f] border-white/[0.05] hover:border-white/[0.15]"
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white">
                            {exercise.name}
                          </h4>
                          <span className="text-[10px] font-bold uppercase text-[#caf300] px-1.5 py-0.5 bg-[#0c0e11] rounded">
                            {exercise.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#94a3b8] line-clamp-1">
                          {exercise.targetMuscles}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] font-['Space_Grotesk'] text-white/70 pt-1">
                          <span>{exercise.recommendedSets}</span>
                          <span>•</span>
                          <span>{exercise.recommendedReps}</span>
                          <span>•</span>
                          <span className="text-[#caf300] font-semibold">{exercise.velocityTarget}</span>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          isSelected ? "text-[#caf300] translate-x-1" : "text-[#94a3b8]"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
