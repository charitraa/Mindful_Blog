

# Mindful Blog

## About the Project
Mindful Blog is a full-stack blog platform where users can create, edit, and share articles with rich text support, comments, and user authentication.  
The goal of this project is to provide a scalable, modern blogging system that can be used by individuals, teams, or as a foundation for larger CMS platforms.

## 🎥 Demo / Screenshots

### 🔗 Live Demo
[hasn't live yet]

### 📸 Screenshots
![Homepage](https://github.com/charitraa/Mindful_Blog/blob/main/home.png)
![Editor](https://github.com/charitraa/Mindful_Blog/blob/main/following.png)

## 🛠️ Tech Stack
- **Frontend**: React (Next.js) + TailwindCSS
- **Backend**: Django (REST Framework)
- **Database**: Sqllite
- **Authentication**: Session Based / JWT
- **Other Tools**: GitHub Actions, ESLint, Prettier

## ⚡ Features
- ✍️ Create, edit, and delete blog posts
- 🔒 Secure user authentication (Login/Register)
- 🖼️ Rich text editor with image upload
- 💬 Commenting system with replies
- 👤 User profiles & author pages
- 📱 Responsive UI (mobile & desktop)
- 📊 User can follow and saved the posts
- 🚀 Deployed with Docker / Vercel / Render

## 📂 Folder Structure
```bash
Mindful Blog/

├── components/   # Reusable UI components
├── config/
├── types/
├── styles/
├── pages/        # Page routes
├── services/     # API calls
   └── utils/        # Helper functions

```

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/username/Mindful_Blog.git
cd Mindful_Blog
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Run the app
```bash
npm run dev
```

## 🧪 Running Tests
```bash
npm run test
```
## 👨‍💻 Contributing
We ❤️ contributions! Please follow these steps to ensure a smooth contribution process:

### How to Contribute
1. **Fork the Repository**  
   Click the "Fork" button on the Mindful Blog GitHub repository.  
   Clone your forked repository to your local machine:  
   ```bash
   git clone https://github.com/your-username/Mindful_Blog.git
   cd Mindful_Blog
   ```

2. **Set Up the Development Environment**  
   Follow the setup instructions above to install dependencies and configure environment variables.  
   Ensure you have the required tools (Node.js, Python, Docker, etc.) installed based on the tech stack.

3. **Create a Feature Branch**  
   Create a new branch for your changes:  
   ```bash
   git checkout -b feature/your-feature-name
   ```  
   Use descriptive branch names (e.g., `fix/auth-bug`, `feature/dark-mode`, `docs/update-readme`).

4. **Make Changes**  
   Work on your feature, bug fix, or documentation improvement.  
   Follow the project's coding standards:  
   - **Frontend**: Use React/Next.js best practices, adhere to ESLint and Prettier rules.  
   - **Tests**: Write unit/integration tests for new features or bug fixes.  

   Ensure your changes align with the project's roadmap or open an issue to discuss new ideas.

5. **Test Your Changes**  
   Run tests to ensure your changes don't break existing functionality:  
   ```bash
   npm run test
   ```  
   Test manually to verify UI and functionality.

6. **Commit Your Changes**  
   Write clear, concise commit messages using the Conventional Commits format:  
   ```
   feat: add dark mode toggle
   fix: resolve login JWT expiration issue
   docs: update README with new setup instructions
   ```  
   Example:  
   ```bash
   git commit -m "feat: add comment reply functionality"
   ```

7. **Push and Open a Pull Request**  
   Push your branch to your forked repository:  
   ```bash
   git push origin feature/your-feature-name
   ```  
   Open a Pull Request (PR) on the main Mindful Blog repository.  
   In the PR description, include:  
   - A summary of your changes.  
   - Any related issue numbers (e.g., `Closes #123`).  
   - Screenshots or GIFs for UI changes (if applicable).  

   Ensure your PR passes CI checks (GitHub Actions).

8. **Code Review**  
   Maintainers will review your PR and provide feedback.  
   Be responsive to comments and make requested changes.  
   Once approved, your PR will be merged!

### Reporting Bugs
- Check the Issues page to avoid duplicates.
- Open a new issue with:  
  - A clear title (e.g., "Login fails with invalid JWT").  
  - Steps to reproduce, expected behavior, and actual behavior.  
  - Screenshots or logs (if applicable).

### Suggesting Features
- Open an issue with the `[Feature Request]` prefix in the title.  
- Describe the feature, its use case, and any implementation ideas.  
- Tag it with the `enhancement` label.

## 📜 Code of Conduct

### Our Pledge
We, as contributors and maintainers of Mindful Blog, pledge to make participation in our project and community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards
Examples of behavior that contributes to a positive environment include:  
- Using welcoming and inclusive language.  
- Being respectful of differing viewpoints and experiences.  
- Gracefully accepting constructive criticism.  
- Focusing on what is best for the community.  
- Showing empathy towards other community members.  

Examples of unacceptable behavior include:  
- The use of sexualized language or imagery and unwelcome sexual attention or advances.  
- Trolling, insulting/derogatory comments, and personal or political attacks.  
- Public or private harassment.  
- Publishing others' private information, such as physical or electronic addresses, without explicit permission.  
- Other conduct which could reasonably be considered inappropriate in a professional setting.

### Our Responsibilities
Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.  
Maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, issues, and other contributions that are not aligned with this Code of Conduct, or to ban temporarily or permanently any contributor for behaviors deemed inappropriate, threatening, offensive, or harmful.

### Scope
This Code of Conduct applies within all project spaces, including GitHub repositories, issue trackers, and any other communication channels related to Mindful Blog. It also applies when an individual is representing the project or its community in public spaces.

### Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at your.email@example.com. All complaints will be reviewed and investigated promptly and fairly.  
All maintainers are obligated to respect the privacy and security of the reporter of any incident.

### Enforcement Guidelines
Maintainers will follow these Community Impact Guidelines in determining the consequences for any action deemed in violation of this Code of Conduct:  
- **Correction**: A private, written warning from a maintainer, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate.  
- **Warning**: A public or private warning with a request for a public apology for more severe or repeated violations.  
- **Temporary Ban**: A temporary ban from contributing to the project for a specified period.  
- **Permanent Ban**: A permanent ban from any sort of interaction with the project community.

### Attribution
This Code of Conduct is adapted from the Contributor Covenant, version 2.1, available at https://www.contributor-covenant.org/version/2/1/code_of_conduct.html.  
For answers to common questions about this Code of Conduct, see the FAQ at https://www.contributor-covenant.org/faq.

## 🛡️ Security Policy

### Supported Versions
The Mindful Blog project actively maintains security updates for the following versions:

| Version  | Supported          |
|----------|--------------------|
| main     | ✅                 |

### Reporting a Vulnerability
If you discover a security vulnerability in Mindful Blog, we encourage responsible disclosure. Please follow these steps:  
- Do not report security issues publicly via GitHub issues or other public forums.  
- Send a detailed report to stharabi9862187405@gmail.com. Include:  
  - A description of the vulnerability.  
  - Steps to reproduce the issue.  
  - Potential impact (e.g., data exposure, unauthorized access).  
  - Any suggested fixes (optional).  

Allow the project maintainers up to 14 days to respond and assess the issue.  
We will acknowledge receipt of your report within 48 hours and work with you to validate and address the vulnerability.

### Disclosure Process
Once a vulnerability is reported, maintainers will:  
- Validate the issue and assess its severity.  
- Develop and test a fix.  
- Release the fix in a new version or patch.  

We aim to resolve critical vulnerabilities within 30 days and less severe issues within 60 days.

## 📜 License
Distributed under the MIT License. See `LICENSE` for details.

## 📬 Contact
- 👤 Your Name – [@_charitraa_](https://www.instagram.com/_charitraa_/)
- 📧 stharabi9862187405@gmail.com
- 🌐 [Portfolio/Website](https://www.charitrashrestha.com.np)

⭐ If you like this project, don’t forget to star the repo!
