interface RecentRunsProps {
  recentRuns: [
    {
      dungeon: string | undefined;
      short_name: string | undefined;
      mythic_level: number | undefined;
      num_keystone_upgrades: number | undefined;
    }
  ];
}

function RecentRuns({ recentRuns }: RecentRunsProps) {
  const completedRunsOnTime = recentRuns.filter(
    (run) => run.num_keystone_upgrades && run.num_keystone_upgrades > 0
  );

  return (
    <div>
      <h1>Recently timed runs</h1>
      <ul>
        {completedRunsOnTime.map((run) => {
          return (
            <li key={run.dungeon}>
              <div className="flex gap-2">
                <p>{run.short_name}</p>
                <p>{run.mythic_level}</p>
                <p>{run.num_keystone_upgrades}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentRuns;
