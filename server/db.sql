--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Homebrew)
-- Dumped by pg_dump version 14.17 (Homebrew)

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

ALTER TABLE ONLY public.sightings DROP CONSTRAINT sightings_individual_id_fkey;
ALTER TABLE ONLY public.individuals DROP CONSTRAINT individuals_species_id_fkey;
ALTER TABLE ONLY public.species DROP CONSTRAINT species_scientific_name_key;
ALTER TABLE ONLY public.species DROP CONSTRAINT species_pkey;
ALTER TABLE ONLY public.species DROP CONSTRAINT species_common_name_key;
ALTER TABLE ONLY public.sightings DROP CONSTRAINT sightings_pkey;
ALTER TABLE ONLY public.individuals DROP CONSTRAINT individuals_pkey;
ALTER TABLE public.species ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.sightings ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.individuals ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.species_id_seq;
DROP TABLE public.species;
DROP SEQUENCE public.sightings_id_seq;
DROP TABLE public.sightings;
DROP SEQUENCE public.individuals_id_seq;
DROP TABLE public.individuals;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: individuals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.individuals (
    id integer NOT NULL,
    nickname character varying(255) NOT NULL,
    species_id integer NOT NULL,
    scientist character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    sighting_time timestamp without time zone NOT NULL,
    individual_id integer NOT NULL,
    location text NOT NULL,
    healthy boolean NOT NULL,
    sighter_email character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT sightings_sighter_email_check CHECK (((sighter_email)::text ~~ '%@%.%'::text))
);


--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.species (
    id integer NOT NULL,
    common_name character varying(255) NOT NULL,
    scientific_name character varying(255) NOT NULL,
    population_estimate integer,
    conservation_status character varying(2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT species_conservation_status_check CHECK (((conservation_status)::text = ANY ((ARRAY['CR'::character varying, 'EN'::character varying, 'VU'::character varying, 'NT'::character varying, 'LC'::character varying, 'DD'::character varying])::text[]))),
    CONSTRAINT species_population_estimate_check CHECK ((population_estimate >= 0))
);


--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.individuals VALUES (1, 'Stripes', 1, 'Dr. Jane Smith', '2025-03-20 00:46:16.413166');
INSERT INTO public.individuals VALUES (2, 'Hunter', 1, 'Dr. Robert Chen', '2025-03-20 00:46:16.413166');
INSERT INTO public.individuals VALUES (3, 'Dumbo', 2, 'Dr. Maria Garcia', '2025-03-20 00:46:16.413166');
INSERT INTO public.individuals VALUES (4, 'Tusker', 2, 'Dr. Ahmed Khan', '2025-03-20 00:46:16.413166');
INSERT INTO public.individuals VALUES (5, 'Bao Bao', 3, 'Dr. Li Wei', '2025-03-20 00:46:16.413166');
INSERT INTO public.individuals VALUES (6, 'Mei Mei', 3, 'Dr. Yuki Tanaka', '2025-03-20 00:46:16.413166');


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sightings VALUES (1, '2023-01-15 09:30:00', 1, 'Bandipur National Park, India', true, 'raj@wildlife.org', '2025-03-20 00:47:15.596291');
INSERT INTO public.sightings VALUES (2, '2023-02-20 14:15:00', 3, 'Amboseli National Park, Kenya', false, 'karen@conservation.co', '2025-03-20 00:47:15.596291');
INSERT INTO public.sightings VALUES (3, '2023-03-10 11:00:00', 5, 'Wolong Nature Reserve, China', true, 'wei@cnwildlife.cn', '2025-03-20 00:47:15.596291');
INSERT INTO public.sightings VALUES (4, '2023-04-05 16:45:00', 2, 'Sundarbans Mangrove Forest', true, 'singh@forestry.in', '2025-03-20 00:47:15.596291');
INSERT INTO public.sightings VALUES (5, '2023-05-12 07:20:00', 4, 'Okavango Delta, Botswana', true, 'tumi@africawild.bw', '2025-03-20 00:47:15.596291');
INSERT INTO public.sightings VALUES (6, '2023-06-18 12:00:00', 6, 'Chengdu Research Base, China', false, 'hiroshi@panda.jp', '2025-03-20 00:47:15.596291');


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.species VALUES (1, 'Tiger', 'Panthera tigris', 3900, 'EN', '2025-03-20 00:43:00.117577');
INSERT INTO public.species VALUES (2, 'African Elephant', 'Loxodonta africana', 415000, 'VU', '2025-03-20 00:43:00.117577');
INSERT INTO public.species VALUES (3, 'Giant Panda', 'Ailuropoda melanoleuca', 1800, 'VU', '2025-03-20 00:43:00.117577');


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.individuals_id_seq', 6, true);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sightings_id_seq', 6, true);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.species_id_seq', 3, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_common_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_common_name_key UNIQUE (common_name);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- Name: species species_scientific_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_scientific_name_key UNIQUE (scientific_name);


--
-- Name: individuals individuals_species_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_species_id_fkey FOREIGN KEY (species_id) REFERENCES public.species(id) ON DELETE CASCADE;


--
-- Name: sightings sightings_individual_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_individual_id_fkey FOREIGN KEY (individual_id) REFERENCES public.individuals(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

