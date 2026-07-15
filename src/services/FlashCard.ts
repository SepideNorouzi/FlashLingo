import { supabase } from "../lib/supabase";
import { authService } from "./auth";

import type { FlashCard } from "../types/flashcard";
import type { FlashcardFilters } from "../types/cardFilter";
import type { FlashCardRow } from "../types/database";
// convert database rows (snake_case) into my app models (camelCase)
function mapFlashCard(card: FlashCardRow): FlashCard {
  return {
    id: card.id,
    word: card.word,
    pronunciation: card.pronunciation,
    meaning: card.meaning,
    projectId: card.project_id,
    learned: card.learned,
    mistake: card.mistake,
    createdAt: card.created_at,
  };
}

export const flashcardService = {
  async getCards(filters: FlashcardFilters = {}) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    let query = supabase.from("flashcards").select("*").eq("user_id", user.id);

    if (filters.projectId) {
      query = query.eq("project_id", filters.projectId);
    }

    if (filters.mistakeOnly) {
      query = query.eq("mistake", true);
    }

    const { data, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error || !data) {
      throw error ?? new Error("Failed to fetch flashcards.");
    }

    let cards = data.map(mapFlashCard);

    if (filters.random) {
      cards = [...cards].sort(() => Math.random() - 0.5);
    }

    return cards;
  },

  async getById(id: string) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { data, error } = await supabase
      .from("flashcards")
      .select("*")
      .eq("id", id)
      .eq("user_id", user.id)
      .single();

    if (error || !data) {
      throw error ?? new Error("Flashcard not found.");
    }

    return mapFlashCard(data);
  },

  async create(card: Omit<FlashCard, "id" | "createdAt">) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { data, error } = await supabase
      .from("flashcards")
      .insert({
        word: card.word,
        pronunciation: card.pronunciation,
        meaning: card.meaning,
        project_id: card.projectId,
        learned: card.learned,
        mistake: card.mistake,
        user_id: user.id,
      })
      .select()
      .single();

    if (error || !data) {
      throw error ?? new Error("Failed to create flashcard.");
    }

    return mapFlashCard(data);
  },

  async update(id: string, changes: Partial<FlashCard>) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const updateData: Record<string, unknown> = {};

    if (changes.word !== undefined) updateData.word = changes.word;

    if (changes.pronunciation !== undefined)
      updateData.pronunciation = changes.pronunciation;

    if (changes.meaning !== undefined) updateData.meaning = changes.meaning;

    if (changes.projectId !== undefined)
      updateData.project_id = changes.projectId;

    if (changes.learned !== undefined) updateData.learned = changes.learned;

    if (changes.mistake !== undefined) updateData.mistake = changes.mistake;

    const { data, error } = await supabase
      .from("flashcards")
      .update(updateData)
      .eq("id", id)
      .eq("user_id", user.id)
      .select()
      .single();

    if (error || !data) {
      throw error ?? new Error("Failed to update flashcard.");
    }

    return mapFlashCard(data);
  },

  async delete(id: string) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { error } = await supabase
      .from("flashcards")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      throw error;
    }
  },
};
