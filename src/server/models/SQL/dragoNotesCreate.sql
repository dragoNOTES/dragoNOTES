SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"name" varchar,
	"github_id" bigint,
  "avatar" varchar,
  UNIQUE ("username"),
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.resources (
	"_id" serial NOT NULL,
	"created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "link" varchar NOT NULL,
  "title" varchar NOT NULL,
  "num_notes" int DEFAULT 0,
  "num_pinned" int DEFAULT 0,
  "owner_id" bigint NOT NULL,
	CONSTRAINT "resources_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "resources_fk0" FOREIGN KEY ("owner_id") REFERENCES public.users("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.user_pinned_resources (  
	"_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"resource_id" bigint NOT NULL,
  UNIQUE ("user_id", "resource_id"),
	CONSTRAINT "user_pinned_resources_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "user_pinned_resources_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id"),
  CONSTRAINT "user_pinned_resources_fk1" FOREIGN KEY ("resource_id") REFERENCES public.resources("_id") ON DELETE CASCADE
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.notes (
	"_id" serial NOT NULL,
	"created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "content" text NOT NULL,
  "owner_id" bigint NOT NULL,
  "resource_id" bigint NOT NULL,
	CONSTRAINT "notes_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "notes_fk0" FOREIGN KEY ("owner_id") REFERENCES public.users("_id"),
  CONSTRAINT "notes_fk1" FOREIGN KEY ("resource_id") REFERENCES public.resources("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.user_pinned_notes (  
	"_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"notes_id" bigint NOT NULL,
  UNIQUE ("user_id", "notes_id"),
	CONSTRAINT "user_pinned_notes_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "user_pinned_notes_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id"),
  CONSTRAINT "user_pinned_notes_fk1" FOREIGN KEY ("notes_id") REFERENCES public.notes("_id") ON DELETE CASCADE
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.tags (
	"_id" serial NOT NULL,
  "name" varchar NOT NULL,
  UNIQUE ("name"),
	CONSTRAINT "tags_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.user_pinned_tags (  
	"_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"tags_id" bigint NOT NULL,
  UNIQUE ("user_id", "tags_id"),
	CONSTRAINT "user_pinned_tags_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "user_pinned_tags_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id"),
  CONSTRAINT "user_pinned_tags_fk1" FOREIGN KEY ("tags_id") REFERENCES public.tags("_id") ON DELETE CASCADE
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.tagged_resources (  
	"_id" serial NOT NULL,
	"resource_id" bigint NOT NULL,
	"tags_id" bigint NOT NULL,
  UNIQUE ("resource_id", "tags_id"),
	CONSTRAINT "tagged_resources_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "tagged_resources_fk0" FOREIGN KEY ("resource_id") REFERENCES public.resources("_id"),
  CONSTRAINT "tagged_resources_fk1" FOREIGN KEY ("tags_id") REFERENCES public.tags("_id")
) WITH (
  OIDS=FALSE
);