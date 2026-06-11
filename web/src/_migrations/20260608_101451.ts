import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "development"."enum_insights_sections_type" AS ENUM('text', 'heading', 'Chart', 'image');
  CREATE TYPE "development"."enum_insights_category" AS ENUM('ai-ml', 'bi', 'data-engineering', 'data-strategy', 'managed-data', 'software-development', 'technology', 'case-study', 'industry');
  CREATE TYPE "development"."enum_success_stories_category" AS ENUM('bi', 'ai', 'data-engineering', 'data-strategy', 'managed-data');
  CREATE TYPE "development"."enum_services_category" AS ENUM('bi', 'ai', 'data-engineering', 'data-strategy', 'managed-data');
  CREATE TYPE "development"."enum_users_roles" AS ENUM('user', 'admin', 'editor');
  CREATE TYPE "development"."enum_topics_status" AS ENUM('generated', 'approved', 'rejected', 'content-created');
  CREATE TYPE "development"."enum_topics_generated_by" AS ENUM('ai', 'human');
  CREATE TYPE "development"."enum_publications_platform" AS ENUM('linkedin', 'facebook', 'insights', 'youtube', 'instagram', 'tiktok');
  CREATE TYPE "development"."enum_publications_status" AS ENUM('scheduled', 'published', 'failed');
  CREATE TYPE "development"."enum_content_pipeline_status" AS ENUM('draft', 'awaiting-content-approval', 'content-approved', 'awaiting-distribution-approval', 'distribution-approved', 'published', 'rejected');
  CREATE TYPE "development"."enum_content_variants_platform" AS ENUM('linkedin', 'facebook', 'instagram', 'tiktok', 'youtube-short');
  CREATE TYPE "development"."enum_knowledge_services" AS ENUM('ai-automation', 'llm-engineering', 'workflow-automation', 'data-engineering', 'business-intelligence', 'system-integration');
  CREATE TYPE "development"."enum_knowledge_document_type" AS ENUM('project', 'case-study', 'meeting-notes', 'proposal', 'architecture', 'lesson-learned', 'faq', 'service');
  CREATE TYPE "development"."enum_knowledge_entry_method" AS ENUM('manual', 'document');
  CREATE TYPE "development"."enum_knowledge_processing_status" AS ENUM('pending', 'processed', 'failed');
  CREATE TABLE "development"."insights_sections_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"color" varchar
  );
  
  CREATE TABLE "development"."insights_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "development"."enum_insights_sections_type" NOT NULL,
  	"content" varchar,
  	"title" varchar,
  	"variant" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "development"."insights_related_articles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"read_time" varchar,
  	"image_url" varchar
  );
  
  CREATE TABLE "development"."insights" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"category" "development"."enum_insights_category" NOT NULL,
  	"summary" varchar,
  	"read_time" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_image_id" integer,
  	"hero_image_image_id" integer,
  	"social_share" boolean DEFAULT false,
  	"cta_title" varchar NOT NULL,
  	"cta_subtitle" varchar NOT NULL,
  	"published_date" timestamp(3) with time zone NOT NULL,
  	"likes" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."success_stories_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "development"."success_stories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"category" "development"."enum_success_stories_category" NOT NULL,
  	"content" jsonb NOT NULL,
  	"image_id" integer,
  	"excerpt" varchar,
  	"client" varchar,
  	"challenge" jsonb,
  	"solution" jsonb,
  	"result" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"category" "development"."enum_services_category" NOT NULL,
  	"content" jsonb NOT NULL,
  	"image_id" integer,
  	"excerpt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "development"."enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "development"."users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "development"."users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"enable_a_p_i_key" boolean,
  	"api_key" varchar,
  	"api_key_index" varchar,
  	"email" varchar NOT NULL,
  	"username" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"_verified" boolean,
  	"_verificationtoken" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "development"."media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "development"."topics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"problem" varchar NOT NULL,
  	"angle" varchar NOT NULL,
  	"audience" jsonb,
  	"content_type" jsonb,
  	"cta" varchar,
  	"scores_authority" numeric,
  	"scores_lead_generation" numeric,
  	"scores_evergreen" numeric,
  	"scores_youtube_potential" numeric,
  	"scores_overall_score" numeric,
  	"distribution_tier" varchar,
  	"recommended_platforms" jsonb,
  	"content_priority" varchar,
  	"ai_recommendations_reasoning" varchar,
  	"ai_recommendations_youtube_mode" varchar,
  	"ai_recommendations_estimated_lead_potential" numeric,
  	"status" "development"."enum_topics_status" DEFAULT 'generated' NOT NULL,
  	"topic_hash" varchar,
  	"generated_by" "development"."enum_topics_generated_by" DEFAULT 'ai',
  	"raw_a_i_output" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."publications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content_id" integer NOT NULL,
  	"platform" "development"."enum_publications_platform" NOT NULL,
  	"external_id" varchar,
  	"published_url" varchar,
  	"published_at" timestamp(3) with time zone,
  	"status" "development"."enum_publications_status",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."content_pipeline_thumbnail_ideas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"idea" varchar
  );
  
  CREATE TABLE "development"."content_pipeline" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"topic_id" integer NOT NULL,
  	"status" "development"."enum_content_pipeline_status" DEFAULT 'draft',
  	"core_message" varchar,
  	"insights_article" jsonb,
  	"youtube_script" varchar,
  	"youtube_title" varchar,
  	"youtube_description" varchar,
  	"approval_notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."content_variants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content_id" integer NOT NULL,
  	"platform" "development"."enum_content_variants_platform" NOT NULL,
  	"content_body" varchar,
  	"version" numeric DEFAULT 1,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."knowledge_services" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "development"."enum_knowledge_services",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "development"."knowledge_outcomes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"outcome" varchar
  );
  
  CREATE TABLE "development"."knowledge" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"document_type" "development"."enum_knowledge_document_type" NOT NULL,
  	"entry_method" "development"."enum_knowledge_entry_method" DEFAULT 'manual',
  	"source_document_id" integer,
  	"industry" varchar,
  	"problem" varchar,
  	"solution" varchar,
  	"content" jsonb,
  	"summary" varchar,
  	"content_generation_value" numeric DEFAULT 5,
  	"approved_for_content_generation" boolean DEFAULT true,
  	"processing_status" "development"."enum_knowledge_processing_status" DEFAULT 'pending',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."knowledge_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "development"."payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "development"."payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"insights_id" integer,
  	"success_stories_id" integer,
  	"services_id" integer,
  	"users_id" integer,
  	"media_id" integer,
  	"topics_id" integer,
  	"publications_id" integer,
  	"content_pipeline_id" integer,
  	"content_variants_id" integer,
  	"knowledge_id" integer
  );
  
  CREATE TABLE "development"."payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "development"."payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "development"."payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "development"."insights_sections_data" ADD CONSTRAINT "insights_sections_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."insights_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."insights_sections" ADD CONSTRAINT "insights_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "development"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."insights_sections" ADD CONSTRAINT "insights_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."insights_related_articles" ADD CONSTRAINT "insights_related_articles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."insights" ADD CONSTRAINT "insights_author_image_id_media_id_fk" FOREIGN KEY ("author_image_id") REFERENCES "development"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."insights" ADD CONSTRAINT "insights_hero_image_image_id_media_id_fk" FOREIGN KEY ("hero_image_image_id") REFERENCES "development"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."success_stories_metrics" ADD CONSTRAINT "success_stories_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."success_stories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."success_stories" ADD CONSTRAINT "success_stories_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "development"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "development"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "development"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."publications" ADD CONSTRAINT "publications_content_id_content_pipeline_id_fk" FOREIGN KEY ("content_id") REFERENCES "development"."content_pipeline"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."content_pipeline_thumbnail_ideas" ADD CONSTRAINT "content_pipeline_thumbnail_ideas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."content_pipeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."content_pipeline" ADD CONSTRAINT "content_pipeline_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "development"."topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."content_variants" ADD CONSTRAINT "content_variants_content_id_content_pipeline_id_fk" FOREIGN KEY ("content_id") REFERENCES "development"."content_pipeline"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."knowledge_services" ADD CONSTRAINT "knowledge_services_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "development"."knowledge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."knowledge_outcomes" ADD CONSTRAINT "knowledge_outcomes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "development"."knowledge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."knowledge" ADD CONSTRAINT "knowledge_source_document_id_media_id_fk" FOREIGN KEY ("source_document_id") REFERENCES "development"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "development"."knowledge_texts" ADD CONSTRAINT "knowledge_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "development"."knowledge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "development"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "development"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_success_stories_fk" FOREIGN KEY ("success_stories_id") REFERENCES "development"."success_stories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "development"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "development"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "development"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "development"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_publications_fk" FOREIGN KEY ("publications_id") REFERENCES "development"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_content_pipeline_fk" FOREIGN KEY ("content_pipeline_id") REFERENCES "development"."content_pipeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_content_variants_fk" FOREIGN KEY ("content_variants_id") REFERENCES "development"."content_variants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_knowledge_fk" FOREIGN KEY ("knowledge_id") REFERENCES "development"."knowledge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "development"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "development"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "development"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "insights_sections_data_order_idx" ON "development"."insights_sections_data" USING btree ("_order");
  CREATE INDEX "insights_sections_data_parent_id_idx" ON "development"."insights_sections_data" USING btree ("_parent_id");
  CREATE INDEX "insights_sections_order_idx" ON "development"."insights_sections" USING btree ("_order");
  CREATE INDEX "insights_sections_parent_id_idx" ON "development"."insights_sections" USING btree ("_parent_id");
  CREATE INDEX "insights_sections_image_idx" ON "development"."insights_sections" USING btree ("image_id");
  CREATE INDEX "insights_related_articles_order_idx" ON "development"."insights_related_articles" USING btree ("_order");
  CREATE INDEX "insights_related_articles_parent_id_idx" ON "development"."insights_related_articles" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "insights_slug_idx" ON "development"."insights" USING btree ("slug");
  CREATE INDEX "insights_author_author_image_idx" ON "development"."insights" USING btree ("author_image_id");
  CREATE INDEX "insights_hero_image_hero_image_image_idx" ON "development"."insights" USING btree ("hero_image_image_id");
  CREATE INDEX "insights_updated_at_idx" ON "development"."insights" USING btree ("updated_at");
  CREATE INDEX "insights_created_at_idx" ON "development"."insights" USING btree ("created_at");
  CREATE INDEX "success_stories_metrics_order_idx" ON "development"."success_stories_metrics" USING btree ("_order");
  CREATE INDEX "success_stories_metrics_parent_id_idx" ON "development"."success_stories_metrics" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "success_stories_slug_idx" ON "development"."success_stories" USING btree ("slug");
  CREATE INDEX "success_stories_image_idx" ON "development"."success_stories" USING btree ("image_id");
  CREATE INDEX "success_stories_updated_at_idx" ON "development"."success_stories" USING btree ("updated_at");
  CREATE INDEX "success_stories_created_at_idx" ON "development"."success_stories" USING btree ("created_at");
  CREATE UNIQUE INDEX "services_slug_idx" ON "development"."services" USING btree ("slug");
  CREATE INDEX "services_image_idx" ON "development"."services" USING btree ("image_id");
  CREATE INDEX "services_updated_at_idx" ON "development"."services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "development"."services" USING btree ("created_at");
  CREATE INDEX "users_roles_order_idx" ON "development"."users_roles" USING btree ("order");
  CREATE INDEX "users_roles_parent_idx" ON "development"."users_roles" USING btree ("parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "development"."users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "development"."users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "development"."users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "development"."users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "development"."users" USING btree ("email");
  CREATE UNIQUE INDEX "users_username_idx" ON "development"."users" USING btree ("username");
  CREATE INDEX "media_updated_at_idx" ON "development"."media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "development"."media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "development"."media" USING btree ("filename");
  CREATE UNIQUE INDEX "topics_topic_hash_idx" ON "development"."topics" USING btree ("topic_hash");
  CREATE INDEX "topics_updated_at_idx" ON "development"."topics" USING btree ("updated_at");
  CREATE INDEX "topics_created_at_idx" ON "development"."topics" USING btree ("created_at");
  CREATE INDEX "publications_content_idx" ON "development"."publications" USING btree ("content_id");
  CREATE INDEX "publications_updated_at_idx" ON "development"."publications" USING btree ("updated_at");
  CREATE INDEX "publications_created_at_idx" ON "development"."publications" USING btree ("created_at");
  CREATE INDEX "content_pipeline_thumbnail_ideas_order_idx" ON "development"."content_pipeline_thumbnail_ideas" USING btree ("_order");
  CREATE INDEX "content_pipeline_thumbnail_ideas_parent_id_idx" ON "development"."content_pipeline_thumbnail_ideas" USING btree ("_parent_id");
  CREATE INDEX "content_pipeline_topic_idx" ON "development"."content_pipeline" USING btree ("topic_id");
  CREATE INDEX "content_pipeline_updated_at_idx" ON "development"."content_pipeline" USING btree ("updated_at");
  CREATE INDEX "content_pipeline_created_at_idx" ON "development"."content_pipeline" USING btree ("created_at");
  CREATE INDEX "content_variants_content_idx" ON "development"."content_variants" USING btree ("content_id");
  CREATE INDEX "content_variants_updated_at_idx" ON "development"."content_variants" USING btree ("updated_at");
  CREATE INDEX "content_variants_created_at_idx" ON "development"."content_variants" USING btree ("created_at");
  CREATE INDEX "knowledge_services_order_idx" ON "development"."knowledge_services" USING btree ("order");
  CREATE INDEX "knowledge_services_parent_idx" ON "development"."knowledge_services" USING btree ("parent_id");
  CREATE INDEX "knowledge_outcomes_order_idx" ON "development"."knowledge_outcomes" USING btree ("_order");
  CREATE INDEX "knowledge_outcomes_parent_id_idx" ON "development"."knowledge_outcomes" USING btree ("_parent_id");
  CREATE INDEX "knowledge_source_document_idx" ON "development"."knowledge" USING btree ("source_document_id");
  CREATE INDEX "knowledge_updated_at_idx" ON "development"."knowledge" USING btree ("updated_at");
  CREATE INDEX "knowledge_created_at_idx" ON "development"."knowledge" USING btree ("created_at");
  CREATE INDEX "knowledge_texts_order_parent" ON "development"."knowledge_texts" USING btree ("order","parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "development"."payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "development"."payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "development"."payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "development"."payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "development"."payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "development"."payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "development"."payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_insights_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("insights_id");
  CREATE INDEX "payload_locked_documents_rels_success_stories_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("success_stories_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_topics_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("topics_id");
  CREATE INDEX "payload_locked_documents_rels_publications_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("publications_id");
  CREATE INDEX "payload_locked_documents_rels_content_pipeline_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("content_pipeline_id");
  CREATE INDEX "payload_locked_documents_rels_content_variants_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("content_variants_id");
  CREATE INDEX "payload_locked_documents_rels_knowledge_id_idx" ON "development"."payload_locked_documents_rels" USING btree ("knowledge_id");
  CREATE INDEX "payload_preferences_key_idx" ON "development"."payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "development"."payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "development"."payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "development"."payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "development"."payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "development"."payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "development"."payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "development"."payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "development"."payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "development"."insights_sections_data" CASCADE;
  DROP TABLE "development"."insights_sections" CASCADE;
  DROP TABLE "development"."insights_related_articles" CASCADE;
  DROP TABLE "development"."insights" CASCADE;
  DROP TABLE "development"."success_stories_metrics" CASCADE;
  DROP TABLE "development"."success_stories" CASCADE;
  DROP TABLE "development"."services" CASCADE;
  DROP TABLE "development"."users_roles" CASCADE;
  DROP TABLE "development"."users_sessions" CASCADE;
  DROP TABLE "development"."users" CASCADE;
  DROP TABLE "development"."media" CASCADE;
  DROP TABLE "development"."topics" CASCADE;
  DROP TABLE "development"."publications" CASCADE;
  DROP TABLE "development"."content_pipeline_thumbnail_ideas" CASCADE;
  DROP TABLE "development"."content_pipeline" CASCADE;
  DROP TABLE "development"."content_variants" CASCADE;
  DROP TABLE "development"."knowledge_services" CASCADE;
  DROP TABLE "development"."knowledge_outcomes" CASCADE;
  DROP TABLE "development"."knowledge" CASCADE;
  DROP TABLE "development"."knowledge_texts" CASCADE;
  DROP TABLE "development"."payload_kv" CASCADE;
  DROP TABLE "development"."payload_locked_documents" CASCADE;
  DROP TABLE "development"."payload_locked_documents_rels" CASCADE;
  DROP TABLE "development"."payload_preferences" CASCADE;
  DROP TABLE "development"."payload_preferences_rels" CASCADE;
  DROP TABLE "development"."payload_migrations" CASCADE;
  DROP TYPE "development"."enum_insights_sections_type";
  DROP TYPE "development"."enum_insights_category";
  DROP TYPE "development"."enum_success_stories_category";
  DROP TYPE "development"."enum_services_category";
  DROP TYPE "development"."enum_users_roles";
  DROP TYPE "development"."enum_topics_status";
  DROP TYPE "development"."enum_topics_generated_by";
  DROP TYPE "development"."enum_publications_platform";
  DROP TYPE "development"."enum_publications_status";
  DROP TYPE "development"."enum_content_pipeline_status";
  DROP TYPE "development"."enum_content_variants_platform";
  DROP TYPE "development"."enum_knowledge_services";
  DROP TYPE "development"."enum_knowledge_document_type";
  DROP TYPE "development"."enum_knowledge_entry_method";
  DROP TYPE "development"."enum_knowledge_processing_status";`)
}
