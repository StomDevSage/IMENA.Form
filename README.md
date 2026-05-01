# 🇷🇼 IMENA Quiz - Rwandan Teaching Platform

A professional quiz platform for Rwandan teachers and students, similar to Google Forms but focused on the Rwandan education system.

## Features

- ✅ Teacher creates quizzes with time limits
- ✅ Students take quizzes with countdown timer
- ✅ Automatic grading for multiple choice
- ✅ Teacher dashboard with student results
- ✅ Student dashboard with performance history
- ✅ Supabase backend (free tier)

## Tech Stack

- HTML5, CSS3, JavaScript
- Supabase (Authentication + Database)
- No frameworks - pure vanilla JS

## Setup Instructions

1. Create a Supabase account (free, no card required)
2. Run the SQL queries in the Supabase SQL editor
3. Update the Supabase URL and anon key in all HTML files
4. Deploy to GitHub Pages or any static hosting

## Database Schema

- `profiles` - User information (teachers/students)
- `quizzes` - Quiz questions and settings
- `attempts` - Student submissions and scores

## Deployment

This is a static site that can be hosted on:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)

## Future Features

- Question bank
- Image upload in questions
- CSV export of results
- Leaderboard

## Author

Made for Rwandan education 🇷🇼

## License

MIT
