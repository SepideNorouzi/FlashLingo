import { supabase } from "../lib/supabase";
import type { FlashCard } from "../types/flashcard";
import type { FlashcardFilters } from "../types/cardFilter";
import type { FlashCardRow } from "../types/database";

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
    let query = supabase.from("flashcards").select("*");
    // ↑ no user_id filter — RLS handles ownership automatically

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
    const { data, error } = await supabase
      .from("flashcards")
      .select("*")
      .eq("id", id)
      // ↑ no user_id filter — RLS ensures you can only fetch your own
      .single();

    if (error || !data) {
      throw error ?? new Error("Flashcard not found.");
    }

    return mapFlashCard(data);
  },

  async create(card: Omit<FlashCard, "id" | "createdAt">) {
    const { data, error } = await supabase
      .from("flashcards")
      .insert({
        word: card.word,
        pronunciation: card.pronunciation,
        meaning: card.meaning,
        project_id: card.projectId,
        learned: card.learned,
        mistake: card.mistake,
        // ↑ no user_id field — flashcards table doesn't have one
      })
      .select()
      .single();

    if (error || !data) {
      throw error ?? new Error("Failed to create flashcard.");
    }

    return mapFlashCard(data);
  },

  async update(id: string, changes: Partial<FlashCard>) {
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
      .select()
      .single();

    if (error || !data) {
      throw error ?? new Error("Failed to update flashcard.");
    }

    return mapFlashCard(data);
  },

  async delete(id: string) {
    const { error } = await supabase.from("flashcards").delete().eq("id", id);
    // ↑ no user_id filter — RLS handles it

    if (error) {
      throw error;
    }
  },
};
