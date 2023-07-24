export interface RecentRuns {
  recentRuns: [
    {
      dungeon: string | undefined;
      short_name: string | undefined;
      mythic_level: number | undefined;
      num_keystone_upgrades: number | undefined;
    }
  ];
}
