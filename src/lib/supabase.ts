import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Configuration par défaut si les variables d'environnement ne sont pas définies
const defaultUrl = 'https://svnzbbaqfadwnvqfizyl.supabase.co';
const defaultKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2bnpiYmFxZmFkd252cWZpenlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjc5NzQsImV4cCI6MjA2NjgwMzk3NH0.Hs6RNMHP8Qs_Ej8Qs_Ej8Qs_Ej8Qs_Ej8Qs_Ej8Qs';

export const supabase = createClient(
  supabaseUrl || defaultUrl, 
  supabaseAnonKey || defaultKey
);

// Types pour la base de données
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string;
          email: string;
          role: 'admin' | 'formateur' | 'stagiaire';
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
          last_login: string | null;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          name?: string;
          email: string;
          role?: 'admin' | 'formateur' | 'stagiaire';
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
          last_login?: string | null;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          role?: 'admin' | 'formateur' | 'stagiaire';
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
          last_login?: string | null;
          is_active?: boolean;
        };
      };
      modules: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: 'tronc-commun' | 'executant' | 'charge-chantier' | 'specialise';
          duration: number;
          level: string;
          certification: string;
          objectives: any;
          prerequisites: any;
          is_active: boolean;
          created_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          category: 'tronc-commun' | 'executant' | 'charge-chantier' | 'specialise';
          duration?: number;
          level: string;
          certification: string;
          objectives?: any;
          prerequisites?: any;
          is_active?: boolean;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          category?: 'tronc-commun' | 'executant' | 'charge-chantier' | 'specialise';
          duration?: number;
          level?: string;
          certification?: string;
          objectives?: any;
          prerequisites?: any;
          is_active?: boolean;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      slides: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          content: string;
          type: 'text' | 'image' | 'video' | 'quiz';
          media_url: string | null;
          notes: string | null;
          duration: number | null;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          module_id: string;
          title: string;
          content: string;
          type: 'text' | 'image' | 'video' | 'quiz';
          media_url?: string | null;
          notes?: string | null;
          duration?: number | null;
          order_index: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          module_id?: string;
          title?: string;
          content?: string;
          type?: 'text' | 'image' | 'video' | 'quiz';
          media_url?: string | null;
          notes?: string | null;
          duration?: number | null;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      training_sessions: {
        Row: {
          id: string;
          module_id: string;
          user_id: string;
          start_time: string;
          end_time: string | null;
          slide_times: any;
          quiz_results: any;
          completed: boolean;
          score: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          module_id: string;
          user_id: string;
          start_time: string;
          end_time?: string | null;
          slide_times?: any;
          quiz_results?: any;
          completed?: boolean;
          score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          module_id?: string;
          user_id?: string;
          start_time?: string;
          end_time?: string | null;
          slide_times?: any;
          quiz_results?: any;
          completed?: boolean;
          score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          module_id: string;
          current_slide: number;
          completion_percentage: number;
          last_accessed: string;
          total_time_spent: number;
          best_score: number | null;
          attempts_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          module_id: string;
          current_slide?: number;
          completion_percentage?: number;
          last_accessed?: string;
          total_time_spent?: number;
          best_score?: number | null;
          attempts_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          module_id?: string;
          current_slide?: number;
          completion_percentage?: number;
          last_accessed?: string;
          total_time_spent?: number;
          best_score?: number | null;
          attempts_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}