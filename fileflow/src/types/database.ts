export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          avatar_url: string | null;
          plan: "free" | "pro" | "enterprise";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string;
          avatar_url?: string | null;
          plan?: "free" | "pro" | "enterprise";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          avatar_url?: string | null;
          plan?: "free" | "pro" | "enterprise";
          updated_at?: string;
        };
      };
      conversion_history: {
        Row: {
          id: string;
          user_id: string;
          tool_id: string;
          tool_name: string;
          category: string;
          input_file_name: string;
          input_file_size: number;
          input_format: string;
          output_file_name: string;
          output_file_size: number;
          output_format: string;
          status: string;
          processing_time_ms: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          tool_id: string;
          tool_name: string;
          category: string;
          input_file_name: string;
          input_file_size: number;
          input_format: string;
          output_file_name?: string;
          output_file_size?: number;
          output_format: string;
          status?: string;
          processing_time_ms?: number;
          created_at?: string;
        };
        Update: {
          output_file_name?: string;
          output_file_size?: number;
          status?: string;
          processing_time_ms?: number;
        };
      };
      favorites: {
        Row: {
          id: string;
          user_id: string;
          tool_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          tool_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          tool_id?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan: "free" | "pro" | "enterprise";
          status: string;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan?: "free" | "pro" | "enterprise";
          status?: string;
          current_period_start?: string;
          current_period_end?: string;
          cancel_at_period_end?: boolean;
          created_at?: string;
        };
        Update: {
          plan?: "free" | "pro" | "enterprise";
          status?: string;
          current_period_start?: string;
          current_period_end?: string;
          cancel_at_period_end?: boolean;
        };
      };
      feedback: {
        Row: {
          id: string;
          user_id: string | null;
          email: string;
          type: string;
          subject: string;
          message: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          email: string;
          type: string;
          subject: string;
          message: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          status?: string;
        };
      };
      files: {
        Row: {
          id: string;
          user_id: string;
          file_name: string;
          file_size: number;
          mime_type: string;
          storage_path: string;
          is_temporary: boolean;
          expires_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          file_name: string;
          file_size: number;
          mime_type: string;
          storage_path: string;
          is_temporary?: boolean;
          expires_at?: string | null;
          created_at?: string;
        };
        Update: {
          is_temporary?: boolean;
          expires_at?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      plan_type: "free" | "pro" | "enterprise";
      conversion_status: "pending" | "processing" | "completed" | "failed" | "cancelled";
      feedback_type: "bug" | "feature" | "general" | "support";
      feedback_status: "open" | "in_progress" | "resolved" | "closed";
    };
  };
}
