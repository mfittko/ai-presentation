---
theme: seriph
---

# Evolving Web Development in the Age of Agentic AI

**Building Serverless Micro Apps around a Core Monolith**  
*Your Name / Date*

---

# Why Rapid Development Matters

- Rapid pace of innovation in web technologies
- Need for quick prototyping and iteration
- The role of an existing monolithic backend (e.g., sofatutor) for data integrity

---

# The Rise of Micro Apps & Serverless Architectures

- Micro apps vs. microservices: smaller, standalone front-end + backend slices
- Serverless hosting (AWS Lambda, Cloudflare Workers, etc.)
- Optional serverless databases (e.g., Supabase) for each micro app

---

# The Role of the Monolithic Backend

- Core data and shared business logic live in the monolith
- Clear APIs that micro apps can consume for user data and other platform-wide features
- Strategy: user-facing features gradually transition to micro apps

---

# Agentic AI & Rapid Prototyping

- Definition of “agentic AI”: more than just autocomplete
- Example tools: bold.new, lovable.dev, VS Code (agent mode), Cursor
- AI can scaffold apps quickly, propose tests, and iterate on feedback

---

# Serverless Micro Apps – Example Architecture

1. User visits micro app (served via Lambda/Cloudfront or similar)
2. Micro app uses a serverless DB (e.g., Supabase) for local data
3. For shared user data or domain logic, the micro app calls the monolith’s API

---

# Human Collaboration: Steering AI & Ensuring Quality

- Humans as “conductors,” guiding AI outputs
- Involvement of engineers, PMs, designers for prompt creation and review
- AI suggests solutions; people ensure alignment with product goals and ethics

---

# Testing, CI, and Avoiding Hallucinations

- Automated testing (Playwright, Jest, etc.) for each micro app
- Continuous Integration to catch AI-generated bugs quickly
- Importance of short feedback loops between test results and AI iterations

---

# Keeping Best Practices Alive

- DRY (Don’t Repeat Yourself), Single Responsibility Principle
- Small, clear context windows reduce inference cost and confusion
- Architecture patterns still matter, even with AI-driven generation

---

# Prompt Engineering & Avoiding Antipatterns

- Clear, specific prompts → more reliable code
- Avoiding timeouts in tests; prefer event-based waits (e.g., element appears)
- Defining acceptance criteria up front for stable AI outputs

---

# Integrating Visual Feedback

- Agents can interpret screenshots (UI layout, styling issues)
- Example: AI sees a screenshot of a broken layout, proposes CSS fixes
- Speeds up the UX refinement loop for front-end micro apps

---

# Replacing Legacy User-Facing Features

- Identify monolithic features that can be split into micro apps
- Re-implement them with serverless hosting and DB, using monolith’s API for shared data
- Gradual approach to modernizing or unbundling the monolith

---

# The Future of Web Dev in the Age of Agentic AI

- Stable monolith for core data + agile micro apps for new features
- “Hours, not weeks; production in days, not months”
- Humans guide AI to ensure robust, user-friendly apps

---

# Live Demo (Approx. 15 Minutes)

**Tools:** bold.new, Cursor, Cline, etc.  
**Steps:**  
1. Scaffold a new micro app with AI  
2. Configure a serverless DB (Supabase)  
3. Integrate with monolith API for user data/auth  
4. Generate and run Playwright tests  
5. Validate screenshots, fix issues via AI  

---

# Q&A and Discussion

- Typical questions: security, performance, data consistency
- Micro apps remain independent yet can securely integrate with the monolith
- Address real-world concerns about scaling and incremental migration

---

# Conclusion / Key Takeaways

1. **Monolithic backends** remain vital for core data integrity.
2. **Serverless micro apps** can be developed quickly and stand alone.
3. **Agentic AI** accelerates development but requires **human oversight**.
4. **Gradual migration** of user-facing features to micro apps is low-risk.
5. **Robust testing & CI** catch AI “hallucinations” and maintain quality.
