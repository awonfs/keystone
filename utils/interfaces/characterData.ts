import { GearItem } from "./gearItem";

export interface CharacterData {
  name: string;
  race: string;
  class: string;
  active_spec_name: string;
  achievement_points: number;
  thumbnail_url: string;
  region: string;
  realm: string;
  mythic_plus_scores_by_season: [
    {
      season: number;
      scores: {
        all: number;
      };
    }
  ];
  guild: {
    name: string;
    realm: string;
  };
  gear: {
    updated_at: string;
    item_level_equipped: number;
    item_level_total: number;
    artifact_traits: number;
    corruption: {
      added: number;
      resisted: number;
      total: number;
      cloakRank: number;
      spells: any[];
    };
    items: {
      head: GearItem;
      neck: GearItem;
      shoulder: GearItem;
      back: GearItem;
      chest: GearItem;
      waist: GearItem;
      wrist: GearItem;
      hands: GearItem;
      legs: GearItem;
      feet: GearItem;
      finger1: GearItem;
      finger2: GearItem;
      trinket1: GearItem;
      trinket2: GearItem;
      mainhand: GearItem;
      offhand: GearItem;
    };
  };
  mythic_plus_recent_runs: [
    {
      dungeon: string;
      short_name: string;
      mythic_level: number;
      num_keystone_upgrades: number;
    }
  ];
}
