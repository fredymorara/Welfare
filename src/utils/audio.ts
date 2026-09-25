// Audio engine disabled per product feedback (no sound noise or AudioContext)
class SoundEngine {
  public enabled: boolean = false;
  public toggle(): boolean { return false; }
  public playClick(_freq?: number) {}
  public playChime() {}
  public playUnlockBass() {}
}

export const sound = new SoundEngine();
