-- Migration 0006: Update Equipment Submissions for Review System
-- Created: 2025-11-01
-- Purpose: Add reviewer fields to equipment_submissions table

-- Add reviewer-related columns (skip if already exist)
ALTER TABLE equipment_submissions ADD COLUMN reviewer_id INTEGER DEFAULT NULL;
ALTER TABLE equipment_submissions ADD COLUMN reviewer_notes TEXT DEFAULT NULL;
ALTER TABLE equipment_submissions ADD COLUMN approved_equipment_id INTEGER DEFAULT NULL;
-- reviewed_at column may already exist, skip if error

-- Create index for reviewer queries
CREATE INDEX IF NOT EXISTS idx_submissions_reviewer ON equipment_submissions(reviewer_id);

-- Create index for approved equipment lookup
CREATE INDEX IF NOT EXISTS idx_submissions_approved_equipment ON equipment_submissions(approved_equipment_id);

