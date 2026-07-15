export interface ProjectRow {
  id: string;
  name: string;
  user_id: string;
  created_at: string;
}

export interface FlashCardRow {
  id: string;

  word: string;

  pronunciation: string;

  meaning: string;

  project_id: string;

  user_id: string;

  learned: boolean;

  mistake: boolean;

  created_at: string;
}
