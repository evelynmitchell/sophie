# Runbook for sophie app

## Introduction

This document describes the runbook for the sophie app. It includes the runbook goals, target audience, runbook strategy, runbook timeline, and success metrics.

## Runbook Goals

The runbook goals for the sophie app are as follows:

- To provide guidance on how to run and maintain the app in a production environment.
- To ensure that the app is available and performing well for users.
- To address any issues or incidents that arise and minimize downtime.

## Target Audience

The target audience for the sophie app runbook is as follows:

- Developers who are responsible for deploying and maintaining the app.
- Operations teams who are responsible for monitoring and managing the app in production.
- Anyone who needs to troubleshoot issues or incidents with the app.

## Runbook Strategy

The runbook strategy for the sophie app is as follows:

- Document common tasks and procedures for running and maintaining the app.
- Include troubleshooting steps for common issues and incidents.
- Provide contact information for support and escalation procedures.
- Regularly review and update the runbook to ensure accuracy and relevance.

## Runbook Timeline

The runbook timeline for the sophie app is as follows:

- Pre-launch: Develop and document the runbook before the app goes live.
- Launch day: Share the runbook with the team and ensure that everyone is familiar with its contents.
- Post-launch: Update the runbook as needed based on feedback and incidents that occur in production.

## Success Metrics

The success metrics for the sophie app runbook are as follows:

- Time to resolution for incidents and issues.
- Availability and uptime of the app.
- User satisfaction with the support and troubleshooting process.

## Conclusion

The runbook for the sophie app includes the runbook goals, target audience, runbook strategy, runbook timeline, and success metrics. By following this runbook, we aim to provide guidance on running and maintaining the app, address any issues or incidents that arise, and ensure that the app is available and performing well for users. We will continue to monitor the success metrics and make adjustments to the runbook as needed to achieve our goals.

# Claude runbook

# Sophie Deployment Runbook

## Quick Reference
- Repository: `github.com/[org]/sophie`
- Production URL: `https://sophie.digitalocean.app`
- Build Command: `npm run build`
- Status Page: `https://status.digitalocean.com`

## 1. Prerequisites
- [ ] GitHub account with repository access
- [ ] Digital Ocean account with appropriate permissions
- [ ] Node.js 18+ installed for local testing
- [ ] Access to Anthropic API key

## 2. Environment Setup

### 2.1 Local Development
```bash
# Clone repository
git clone https://github.com/[org]/sophie.git
cd sophie

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with required values
```

### 2.2 Environment Variables
```plaintext
# Required Variables
ANTHROPIC_API_KEY=your_api_key_here

# Optional Variables
NODE_ENV=production
DEBUG=false
```

## 3. Build Process

### 3.1 Local Build
```bash
# Run tests
npm test

# Create production build
npm run build

# Test production build locally
npm run serve
```

### 3.2 CI/CD Pipeline
1. GitHub Actions triggered on push to main
2. Runs tests and builds
3. Creates production bundle
4. Deploys to Digital Ocean

## 4. Deployment Steps

### 4.1 Manual Deployment
```bash
# 1. Ensure clean working directory
git status

# 2. Pull latest changes
git pull origin main

# 3. Install dependencies
npm ci

# 4. Run tests
npm test

# 5. Create production build
npm run build

# 6. Deploy to Digital Ocean
doctl apps create --spec .do/app.yaml
```

### 4.2 Automated Deployment
1. Push to main branch
2. Monitor GitHub Actions: `https://github.com/[org]/sophie/actions`
3. Verify deployment in Digital Ocean dashboard

## 5. Verification

### 5.1 Post-Deployment Checks
- [ ] Site loads at production URL
- [ ] Can create new tasks
- [ ] Tasks persist after refresh
- [ ] LLM integration working
- [ ] Mobile layout working

### 5.2 Monitoring
- Check Digital Ocean dashboard
- Verify API calls in Claude console
- Monitor localStorage usage

## 6. Rollback Procedures

### 6.1 Quick Rollback
```bash
# Using Digital Ocean CLI
doctl apps rollback [APP_ID] --deployment-id [DEPLOYMENT_ID]
```

### 6.2 Manual Rollback
1. Identify last working deployment
2. Revert commit in GitHub
3. Push revert commit
4. Monitor deployment

## 7. Troubleshooting

### 7.1 Common Issues
1. Build Failures
   - Check webpack build logs
   - Verify environment variables
   - Check for dependency conflicts

2. API Issues
   - Verify API key in environment
   - Check Claude API status
   - Review API call logs

3. Deployment Issues
   - Check Digital Ocean status
   - Verify GitHub Actions logs
   - Check build output

### 7.2 Support Contacts
- Technical Lead: [email]
- Digital Ocean Support: [link]
- Anthropic Support: [link]

## 8. Maintenance

### 8.1 Regular Tasks
- [ ] Review API usage weekly
- [ ] Check for dependency updates
- [ ] Monitor error logs
- [ ] Review performance metrics

### 8.2 Update Procedures
1. Create update branch
2. Test changes locally
3. Create PR
4. Review and merge
5. Monitor deployment

## 9. Security

### 9.1 API Key Rotation
1. Generate new API key
2. Update Digital Ocean environment
3. Verify functionality
4. Remove old key

### 9.2 Access Control
- Maintain GitHub access list
- Review Digital Ocean permissions
- Document API key holders