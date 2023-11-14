export type PressureLevel = "low" | "normal" | "high" | "critical";

export interface BloodPreassure {
  id: string;
  patientId: number;
  date: Date;
  systolicPressure: number;
  dystolicPressure: number;
  pressureLevel: PressureLevel
}
