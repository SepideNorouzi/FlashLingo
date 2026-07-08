export interface FlashCard {
  id: string;

  word: string;

  pronunciation: string;

  meaning: string;

  projectId: string;

  learned: boolean;

  mistake: boolean;

  createdAt: string;
}
