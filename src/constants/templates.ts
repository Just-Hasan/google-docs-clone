export const templates = [
  {
    id: 'blank',
    label: 'Blank Document',
    imageUrl: '/blank-document.svg',
    initialContent: '',
  },
  {
    id: 'software-proposal',
    label: 'Software Development Proposal',
    imageUrl: '/software-proposal.svg',
    initialContent: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 850px; margin: 0 auto; padding: 40px; line-height: 1.6; color: #333;">
        <div style="text-align: center; margin-bottom: 50px; border-bottom: 3px solid #2563eb; padding-bottom: 30px;">
          <h1 style="font-size: 36px; color: #1e40af; margin: 0 0 10px 0; font-weight: 700;">Software Development Proposal</h1>
          <p style="font-size: 16px; color: #64748b; margin: 5px 0;">Prepared for: <strong>[Client Name]</strong></p>
          <p style="font-size: 14px; color: #94a3b8;">[Date]</p>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #1e40af; font-size: 24px; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px;">Executive Summary</h2>
          <p style="margin-bottom: 15px;">This proposal outlines our approach to developing a comprehensive software solution that addresses your business needs. Our team brings extensive experience in modern development practices and cutting-edge technologies.</p>
          <p>We are committed to delivering a scalable, maintainable, and user-friendly solution that exceeds your expectations.</p>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #1e40af; font-size: 24px; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px;">Project Scope</h2>
          <h3 style="color: #475569; font-size: 18px; margin: 20px 0 10px 0;">Objectives</h3>
          <ul style="margin-left: 20px; color: #475569;">
            <li style="margin-bottom: 10px;">Develop a robust and scalable software application</li>
            <li style="margin-bottom: 10px;">Implement modern UI/UX design principles</li>
            <li style="margin-bottom: 10px;">Ensure high performance and security standards</li>
            <li style="margin-bottom: 10px;">Provide comprehensive documentation and training</li>
          </ul>

          <h3 style="color: #475569; font-size: 18px; margin: 20px 0 10px 0;">Deliverables</h3>
          <ul style="margin-left: 20px; color: #475569;">
            <li style="margin-bottom: 10px;">Fully functional web/mobile application</li>
            <li style="margin-bottom: 10px;">Source code and technical documentation</li>
            <li style="margin-bottom: 10px;">User manuals and training materials</li>
            <li style="margin-bottom: 10px;">6 months of maintenance and support</li>
          </ul>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #1e40af; font-size: 24px; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px;">Technical Approach</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #475569; font-size: 18px; margin: 0 0 10px 0;">Technology Stack</h3>
            <p style="margin: 0; color: #64748b;">Frontend: React.js, TypeScript, Tailwind CSS</p>
            <p style="margin: 5px 0 0 0; color: #64748b;">Backend: Node.js, Express, PostgreSQL</p>
            <p style="margin: 5px 0 0 0; color: #64748b;">Cloud: AWS/Azure with CI/CD pipeline</p>
          </div>
          <p>Our development methodology follows Agile principles with bi-weekly sprints and continuous client feedback integration.</p>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #1e40af; font-size: 24px; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px;">Timeline & Milestones</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background: #1e40af; color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Phase</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Duration</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px; border: 1px solid #ddd;">Discovery & Planning</td>
                <td style="padding: 12px; border: 1px solid #ddd;">2 weeks</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Requirements document, Architecture design</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Development Phase 1</td>
                <td style="padding: 12px; border: 1px solid #ddd;">6 weeks</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Core features MVP</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px; border: 1px solid #ddd;">Development Phase 2</td>
                <td style="padding: 12px; border: 1px solid #ddd;">6 weeks</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Advanced features & integrations</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Testing & Deployment</td>
                <td style="padding: 12px; border: 1px solid #ddd;">2 weeks</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Production-ready application</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #1e40af; font-size: 24px; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px;">Investment</h2>
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; border: 2px solid #2563eb;">
            <p style="font-size: 18px; margin: 0 0 10px 0; color: #475569;">Total Project Cost: <strong style="color: #1e40af; font-size: 24px;">$[Amount]</strong></p>
            <p style="margin: 0; color: #64748b; font-size: 14px;">Payment terms: 30% upfront, 40% at milestone completion, 30% upon delivery</p>
          </div>
        </div>

        <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px; margin: 0;">We look forward to partnering with you on this exciting project.</p>
          <div style="margin-top: 30px;">
            <p style="margin: 5px 0; color: #475569;"><strong>[Your Name]</strong></p>
            <p style="margin: 5px 0; color: #64748b;">[Your Title]</p>
            <p style="margin: 5px 0; color: #64748b;">[Company Name]</p>
            <p style="margin: 5px 0; color: #64748b;">[Email] | [Phone]</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'project-proposal',
    label: 'Project Proposal',
    imageUrl: '/project-proposal.svg',
    initialContent: `
      <div style="font-family: 'Georgia', serif; max-width: 850px; margin: 0 auto; padding: 40px; line-height: 1.7; color: #2d3748;">
        <div style="text-align: center; margin-bottom: 50px; padding-bottom: 30px; border-bottom: 3px solid #16a34a;">
          <h1 style="font-size: 38px; color: #15803d; margin: 0 0 15px 0; font-weight: 700; letter-spacing: -0.5px;">Project Proposal</h1>
          <p style="font-size: 20px; color: #059669; margin: 10px 0; font-weight: 600;">[Project Name]</p>
          <p style="font-size: 14px; color: #6b7280; margin: 10px 0;">Submitted to: <strong>[Organization/Client Name]</strong></p>
          <p style="font-size: 14px; color: #9ca3af;">[Date]</p>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #15803d; font-size: 26px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #16a34a;">Introduction</h2>
          <p style="margin-bottom: 15px; text-align: justify;">This proposal presents a comprehensive plan for [Project Name], designed to address [specific challenge or opportunity]. Our approach combines strategic planning, innovative solutions, and proven methodologies to ensure successful project delivery.</p>
          <p style="text-align: justify;">We believe this project will significantly contribute to [organization's goals/objectives] while maintaining the highest standards of quality and professionalism.</p>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #15803d; font-size: 26px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #16a34a;">Problem Statement</h2>
          <div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #16a34a; margin-bottom: 15px;">
            <p style="margin: 0; color: #166534; font-style: italic;">[Clearly articulate the problem or opportunity that this project addresses. Include relevant statistics, pain points, or market gaps.]</p>
          </div>
          <p style="text-align: justify;">The current situation presents several challenges that require immediate attention and strategic intervention. Without proper action, these issues may lead to [consequences].</p>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #15803d; font-size: 26px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #16a34a;">Proposed Solution</h2>
          <h3 style="color: #166534; font-size: 20px; margin: 25px 0 15px 0;">Key Components</h3>
          <div style="display: grid; gap: 15px;">
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a;">
              <h4 style="color: #15803d; margin: 0 0 10px 0; font-size: 18px;">Component 1: [Name]</h4>
              <p style="margin: 0; color: #4b5563;">Description of the first major component and its benefits.</p>
            </div>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a;">
              <h4 style="color: #15803d; margin: 0 0 10px 0; font-size: 18px;">Component 2: [Name]</h4>
              <p style="margin: 0; color: #4b5563;">Description of the second major component and its benefits.</p>
            </div>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a;">
              <h4 style="color: #15803d; margin: 0 0 10px 0; font-size: 18px;">Component 3: [Name]</h4>
              <p style="margin: 0; color: #4b5563;">Description of the third major component and its benefits.</p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #15803d; font-size: 26px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #16a34a;">Expected Outcomes</h2>
          <ul style="margin-left: 25px; color: #4b5563; line-height: 2;">
            <li style="margin-bottom: 12px;"><strong>Quantifiable Result 1:</strong> [e.g., 30% increase in efficiency]</li>
            <li style="margin-bottom: 12px;"><strong>Quantifiable Result 2:</strong> [e.g., Cost reduction of $X]</li>
            <li style="margin-bottom: 12px;"><strong>Qualitative Benefit 1:</strong> [e.g., Improved stakeholder satisfaction]</li>
            <li style="margin-bottom: 12px;"><strong>Long-term Impact:</strong> [e.g., Sustainable competitive advantage]</li>
          </ul>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #15803d; font-size: 26px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #16a34a;">Project Timeline</h2>
          <div style="position: relative; padding-left: 30px; border-left: 3px solid #16a34a; margin-top: 20px;">
            <div style="margin-bottom: 25px; position: relative;">
              <div style="position: absolute; left: -36px; width: 12px; height: 12px; background: #16a34a; border-radius: 50%; border: 3px solid white;"></div>
              <h4 style="color: #15803d; margin: 0 0 5px 0;">Phase 1: Planning & Research</h4>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Weeks 1-2</p>
              <p style="margin: 5px 0 0 0; color: #4b5563;">Initial research, stakeholder meetings, and detailed planning.</p>
            </div>
            <div style="margin-bottom: 25px; position: relative;">
              <div style="position: absolute; left: -36px; width: 12px; height: 12px; background: #16a34a; border-radius: 50%; border: 3px solid white;"></div>
              <h4 style="color: #15803d; margin: 0 0 5px 0;">Phase 2: Implementation</h4>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Weeks 3-8</p>
              <p style="margin: 5px 0 0 0; color: #4b5563;">Execute core activities and deliverables.</p>
            </div>
            <div style="margin-bottom: 25px; position: relative;">
              <div style="position: absolute; left: -36px; width: 12px; height: 12px; background: #16a34a; border-radius: 50%; border: 3px solid white;"></div>
              <h4 style="color: #15803d; margin: 0 0 5px 0;">Phase 3: Review & Optimization</h4>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Weeks 9-10</p>
              <p style="margin: 5px 0 0 0; color: #4b5563;">Quality assurance, testing, and refinements.</p>
            </div>
            <div style="position: relative;">
              <div style="position: absolute; left: -36px; width: 12px; height: 12px; background: #16a34a; border-radius: 50%; border: 3px solid white;"></div>
              <h4 style="color: #15803d; margin: 0 0 5px 0;">Phase 4: Delivery & Closure</h4>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Week 11-12</p>
              <p style="margin: 5px 0 0 0; color: #4b5563;">Final delivery, documentation, and project handover.</p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="color: #15803d; font-size: 26px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #16a34a;">Budget Overview</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background: #15803d; color: white;">
                <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">Category</th>
                <th style="padding: 15px; text-align: right; border: 1px solid #ddd;">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #f0fdf4;">
                <td style="padding: 12px; border: 1px solid #ddd;">Personnel</td>
                <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$[Amount]</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Equipment & Materials</td>
                <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$[Amount]</td>
              </tr>
              <tr style="background: #f0fdf4;">
                <td style="padding: 12px; border: 1px solid #ddd;">Technology & Software</td>
                <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$[Amount]</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Contingency (10%)</td>
                <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$[Amount]</td>
              </tr>
              <tr style="background: #15803d; color: white; font-weight: bold;">
                <td style="padding: 15px; border: 1px solid #ddd;">Total Budget</td>
                <td style="padding: 15px; text-align: right; border: 1px solid #ddd;">$[Total Amount]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top: 50px; padding: 30px; background: #f0fdf4; border-radius: 8px; border: 2px solid #16a34a;">
          <h3 style="color: #15803d; margin: 0 0 15px 0; font-size: 22px;">Next Steps</h3>
          <p style="margin: 0 0 10px 0; color: #166534;">Upon approval of this proposal, we will:</p>
          <ol style="margin: 10px 0 0 20px; color: #166534; line-height: 1.8;">
            <li>Schedule a kickoff meeting within 5 business days</li>
            <li>Finalize all contractual agreements</li>
            <li>Assign the project team and begin Phase 1</li>
          </ol>
        </div>

        <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid #d1d5db;">
          <p style="color: #6b7280; font-size: 14px; margin: 0 0 20px 0;">Thank you for considering this proposal. We are excited about the opportunity to contribute to your success.</p>
          <div style="margin-top: 30px;">
            <p style="margin: 5px 0; color: #374151;"><strong>[Your Name]</strong></p>
            <p style="margin: 5px 0; color: #6b7280;">[Your Title]</p>
            <p style="margin: 5px 0; color: #6b7280;">[Organization Name]</p>
            <p style="margin: 5px 0; color: #6b7280;">[Contact Information]</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'business-letter',
    label: 'Business Letter',
    imageUrl: '/business-letter.svg',
    initialContent: `
      <div style="font-family: 'Times New Roman', Times, serif; max-width: 700px; margin: 0 auto; padding: 40px; line-height: 1.6; color: #1f2937;">
        <div style="margin-bottom: 40px;">
          <p style="margin: 0; color: #374151; font-size: 14px;">[Your Company Name]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[Street Address]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[City, State ZIP Code]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[Phone Number]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[Email Address]</p>
        </div>

        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #4b5563; font-size: 14px;">[Date]</p>
        </div>

        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #374151; font-size: 14px;">[Recipient Name]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[Recipient Title]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[Company Name]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[Street Address]</p>
          <p style="margin: 3px 0; color: #374151; font-size: 14px;">[City, State ZIP Code]</p>
        </div>

        <div style="margin-bottom: 25px;">
          <p style="margin: 0; color: #1f2937; font-size: 15px;"><strong>Re: [Subject Line]</strong></p>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="margin: 0; color: #1f2937; font-size: 15px;">Dear [Mr./Ms./Dr. Last Name]:</p>
        </div>

        <div style="margin-bottom: 20px; text-align: justify;">
          <p style="margin: 0 0 15px 0; color: #374151; font-size: 15px; text-indent: 0;">I am writing to [clearly state the purpose of your letter in the opening paragraph]. This communication serves to [establish context and demonstrate the importance of the matter at hand].</p>
          
          <p style="margin: 15px 0; color: #374151; font-size: 15px; text-indent: 0;">In the course of our business relationship, we have consistently valued [mention positive aspects or history]. It is in this spirit of mutual respect and professional collaboration that I wish to address [main topic or concern].</p>
          
          <p style="margin: 15px 0; color: #374151; font-size: 15px; text-indent: 0;">Our proposal includes the following key points:</p>
          
          <ul style="margin: 15px 0 15px 25px; color: #374151; font-size: 15px;">
            <li style="margin-bottom: 8px;">[First important point or detail]</li>
            <li style="margin-bottom: 8px;">[Second important point or detail]</li>
            <li style="margin-bottom: 8px;">[Third important point or detail]</li>
          </ul>
          
          <p style="margin: 15px 0; color: #374151; font-size: 15px; text-indent: 0;">We believe that [state the benefits or expected outcomes]. This approach will ensure [positive results or advantages for both parties].</p>
          
          <p style="margin: 15px 0; color: #374151; font-size: 15px; text-indent: 0;">Please feel free to contact me at [phone number] or [email address] should you have any questions or require additional information. I am available to discuss this matter at your earliest convenience.</p>
          
          <p style="margin: 15px 0 0 0; color: #374151; font-size: 15px; text-indent: 0;">Thank you for your time and consideration. I look forward to your favorable response.</p>
        </div>

        <div style="margin-top: 40px;">
          <p style="margin: 0 0 50px 0; color: #1f2937; font-size: 15px;">Sincerely,</p>
          <p style="margin: 0; color: #1f2937; font-size: 15px;"><strong>[Your Name]</strong></p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Your Title]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Your Company]</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 13px; font-style: italic;">Enclosures: [List any documents included]</p>
          <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 13px; font-style: italic;">cc: [List anyone receiving a copy]</p>
        </div>
      </div>
    `,
  },
  {
    id: 'resume',
    label: 'Resume',
    imageUrl: '/resume.svg',
    initialContent: `
      <div style="font-family: 'Calibri', 'Arial', sans-serif; max-width: 850px; margin: 0 auto; padding: 40px; line-height: 1.5; color: #1f2937;">
        <div style="text-align: center; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 3px solid #0891b2;">
          <h1 style="font-size: 42px; color: #0e7490; margin: 0 0 10px 0; font-weight: 700; letter-spacing: 1px;">[YOUR NAME]</h1>
          <p style="font-size: 16px; color: #0891b2; margin: 5px 0; font-weight: 600;">[Professional Title / Target Position]</p>
          <div style="margin-top: 15px; color: #4b5563; font-size: 14px;">
            <span style="margin: 0 15px;">[City, State]</span>
            <span style="margin: 0 15px;">|</span>
            <span style="margin: 0 15px;">[Phone Number]</span>
            <span style="margin: 0 15px;">|</span>
            <span style="margin: 0 15px;">[Email Address]</span>
            <span style="margin: 0 15px;">|</span>
            <span style="margin: 0 15px;">[LinkedIn URL]</span>
          </div>
        </div>

        <div style="margin-bottom: 35px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Professional Summary</h2>
          <p style="margin: 0; color: #374151; font-size: 15px; text-align: justify; line-height: 1.6;">Results-driven [profession/role] with [X] years of experience in [industry/field]. Proven track record of [key achievement or skill]. Expertise in [relevant skills] with a strong focus on [area of specialization]. Known for [professional qualities] and delivering exceptional results in fast-paced environments.</p>
        </div>

        <div style="margin-bottom: 35px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Core Competencies</h2>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div style="background: #ecfeff; padding: 10px; border-left: 3px solid #0891b2;">
              <p style="margin: 0; color: #0e7490; font-size: 14px; font-weight: 600;">• [Skill/Competency 1]</p>
            </div>
            <div style="background: #ecfeff; padding: 10px; border-left: 3px solid #0891b2;">
              <p style="margin: 0; color: #0e7490; font-size: 14px; font-weight: 600;">• [Skill/Competency 2]</p>
            </div>
            <div style="background: #ecfeff; padding: 10px; border-left: 3px solid #0891b2;">
              <p style="margin: 0; color: #0e7490; font-size: 14px; font-weight: 600;">• [Skill/Competency 3]</p>
            </div>
            <div style="background: #ecfeff; padding: 10px; border-left: 3px solid #0891b2;">
              <p style="margin: 0; color: #0e7490; font-size: 14px; font-weight: 600;">• [Skill/Competency 4]</p>
            </div>
            <div style="background: #ecfeff; padding: 10px; border-left: 3px solid #0891b2;">
              <p style="margin: 0; color: #0e7490; font-size: 14px; font-weight: 600;">• [Skill/Competency 5]</p>
            </div>
            <div style="background: #ecfeff; padding: 10px; border-left: 3px solid #0891b2;">
              <p style="margin: 0; color: #0e7490; font-size: 14px; font-weight: 600;">• [Skill/Competency 6]</p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 35px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Professional Experience</h2>
          
          <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
              <h3 style="color: #0e7490; font-size: 18px; margin: 0; font-weight: 700;">[Job Title]</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 0; font-style: italic;">[Start Date] - [End Date/Present]</p>
            </div>
            <p style="color: #374151; font-size: 15px; margin: 0 0 10px 0; font-weight: 600;">[Company Name] | [Location]</p>
            <ul style="margin: 10px 0 0 20px; color: #4b5563; font-size: 14px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">Achieved [specific accomplishment with quantifiable results, e.g., "increased sales by 35%"]</li>
              <li style="margin-bottom: 8px;">Led [project/initiative] resulting in [positive outcome or business impact]</li>
              <li style="margin-bottom: 8px;">Collaborated with [teams/departments] to [accomplish specific goal]</li>
              <li style="margin-bottom: 8px;">Implemented [system/process] that improved [metric] by [percentage/amount]</li>
            </ul>
          </div>

          <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
              <h3 style="color: #0e7490; font-size: 18px; margin: 0; font-weight: 700;">[Job Title]</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 0; font-style: italic;">[Start Date] - [End Date]</p>
            </div>
            <p style="color: #374151; font-size: 15px; margin: 0 0 10px 0; font-weight: 600;">[Company Name] | [Location]</p>
            <ul style="margin: 10px 0 0 20px; color: #4b5563; font-size: 14px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">Managed [responsibility] for [scope or scale of work]</li>
              <li style="margin-bottom: 8px;">Developed and executed [strategy/plan] that delivered [result]</li>
              <li style="margin-bottom: 8px;">Reduced [cost/time/errors] by [percentage] through [specific action]</li>
              <li style="margin-bottom: 8px;">Trained and mentored [number] of [team members/employees] in [skills/area]</li>
            </ul>
          </div>

          <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
              <h3 style="color: #0e7490; font-size: 18px; margin: 0; font-weight: 700;">[Job Title]</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 0; font-style: italic;">[Start Date] - [End Date]</p>
            </div>
            <p style="color: #374151; font-size: 15px; margin: 0 0 10px 0; font-weight: 600;">[Company Name] | [Location]</p>
            <ul style="margin: 10px 0 0 20px; color: #4b5563; font-size: 14px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">Spearheaded [initiative] that generated [revenue/savings/improvement]</li>
              <li style="margin-bottom: 8px;">Coordinated with [stakeholders] to ensure [successful outcome]</li>
              <li style="margin-bottom: 8px;">Streamlined [process] resulting in [efficiency gain or cost reduction]</li>
            </ul>
          </div>
        </div>

        <div style="margin-bottom: 35px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Education</h2>
          
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 style="color: #374151; font-size: 16px; margin: 0; font-weight: 700;">[Degree] in [Field of Study]</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 0; font-style: italic;">[Graduation Year]</p>
            </div>
            <p style="color: #4b5563; font-size: 14px; margin: 5px 0 0 0;">[University Name] | [Location]</p>
            <p style="color: #4b5563; font-size: 14px; margin: 5px 0 0 0;"><em>GPA: [X.XX] | Honors: [Dean's List, Cum Laude, etc.]</em></p>
          </div>

          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 style="color: #374151; font-size: 16px; margin: 0; font-weight: 700;">[Degree] in [Field of Study]</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 0; font-style: italic;">[Graduation Year]</p>
            </div>
            <p style="color: #4b5563; font-size: 14px; margin: 5px 0 0 0;">[University Name] | [Location]</p>
          </div>
        </div>

        <div style="margin-bottom: 35px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Certifications & Training</h2>
          <ul style="margin: 0 0 0 20px; color: #4b5563; font-size: 14px; line-height: 2;">
            <li><strong>[Certification Name]</strong> - [Issuing Organization], [Year]</li>
            <li><strong>[Certification Name]</strong> - [Issuing Organization], [Year]</li>
            <li><strong>[Training Program]</strong> - [Institution], [Year]</li>
          </ul>
        </div>

        <div style="margin-bottom: 35px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Technical Skills</h2>
          <div style="background: #f0f9ff; padding: 15px; border-radius: 5px; border-left: 4px solid #0891b2;">
            <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.8;">
              <strong>Software:</strong> [List relevant software, e.g., "Microsoft Office Suite, Adobe Creative Cloud, Salesforce"]<br>
              <strong>Programming:</strong> [List programming languages, e.g., "Python, JavaScript, SQL"]<br>
              <strong>Tools:</strong> [List relevant tools, e.g., "Jira, Trello, GitHub, Slack"]<br>
              <strong>Languages:</strong> [List languages and proficiency, e.g., "English (Native), Spanish (Fluent)"]
            </p>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="color: #0e7490; font-size: 22px; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #0891b2; text-transform: uppercase; letter-spacing: 1px;">Professional Affiliations</h2>
          <ul style="margin: 0 0 0 20px; color: #4b5563; font-size: 14px; line-height: 2;">
            <li>Member, [Professional Organization Name] ([Year] - Present)</li>
            <li>Member, [Professional Organization Name] ([Year] - Present)</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    id: 'cover-letter',
    label: 'Cover Letter',
    imageUrl: '/cover-letter.svg',
    initialContent: `
      <div style="font-family: 'Arial', sans-serif; max-width: 700px; margin: 0 auto; padding: 40px; line-height: 1.6; color: #1f2937;">
        <div style="margin-bottom: 40px;">
          <p style="margin: 0; color: #374151; font-size: 14px; font-weight: 600;">[Your Name]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Street Address]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[City, State ZIP Code]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Phone Number]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Email Address]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[LinkedIn Profile URL]</p>
        </div>

        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #4b5563; font-size: 14px;">[Date]</p>
        </div>

        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #374151; font-size: 14px; font-weight: 600;">[Hiring Manager's Name]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Title]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Company Name]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Street Address]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[City, State ZIP Code]</p>
        </div>

        <div style="margin-bottom: 25px;">
          <p style="margin: 0; color: #1f2937; font-size: 15px;">Dear [Mr./Ms./Dr. Last Name or Hiring Manager]:</p>
        </div>

        <div style="margin-bottom: 20px; text-align: justify;">
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">I am writing to express my strong interest in the <strong>[Job Title]</strong> position at <strong>[Company Name]</strong>, as advertised on [where you found the job posting]. With [X years] of experience in [relevant field/industry] and a proven track record of [key achievement or skill], I am confident that I would be a valuable addition to your team.</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">What particularly excites me about this opportunity is [specific aspect of the company or role that appeals to you]. Your company's commitment to [company value or initiative] aligns perfectly with my professional values and career aspirations. I am especially impressed by [recent company achievement or project], which demonstrates the innovative spirit I seek in an employer.</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">In my current role as <strong>[Current/Most Recent Position]</strong> at <strong>[Current/Previous Company]</strong>, I have successfully:</p>
          
          <ul style="margin: 10px 0 18px 25px; color: #374151; font-size: 15px; line-height: 1.8;">
            <li style="margin-bottom: 10px;"><strong>[Accomplishment 1]:</strong> [Brief description with quantifiable results, e.g., "Increased team productivity by 40% through implementation of agile methodologies"]</li>
            <li style="margin-bottom: 10px;"><strong>[Accomplishment 2]:</strong> [Brief description with impact, e.g., "Led a cross-functional team of 12 to deliver a $2M project ahead of schedule"]</li>
            <li style="margin-bottom: 10px;"><strong>[Accomplishment 3]:</strong> [Brief description showing relevant skills, e.g., "Developed and executed a marketing strategy that generated 10,000+ qualified leads"]</li>
          </ul>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">My expertise in [relevant skills] combined with my ability to [soft skill] makes me uniquely qualified for this position. I am particularly skilled at [specific capability relevant to the job], which I understand is a key requirement for success in this role.</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">Beyond my technical qualifications, I bring a collaborative work style and a passion for [relevant industry/field]. I thrive in dynamic environments where I can contribute to meaningful projects and work alongside talented professionals who share my commitment to excellence. I am confident that my background in [relevant experience] will enable me to make an immediate and lasting impact at [Company Name].</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.7;">I would welcome the opportunity to discuss how my experience and skills align with the needs of your team. I am available for an interview at your convenience and can be reached at [phone number] or [email address]. Thank you for considering my application. I look forward to the possibility of contributing to [Company Name]'s continued success.</p>
        </div>

        <div style="margin-top: 40px;">
          <p style="margin: 0 0 50px 0; color: #1f2937; font-size: 15px;">Sincerely,</p>
          <p style="margin: 0; color: #1f2937; font-size: 15px; font-weight: 600;">[Your Name]</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 13px; font-style: italic;">Enclosure: Resume</p>
        </div>
      </div>
    `,
  },
  {
    id: 'letter',
    label: 'Letter',
    imageUrl: '/letter.svg',
    initialContent: `
      <div style="font-family: 'Georgia', serif; max-width: 700px; margin: 0 auto; padding: 40px; line-height: 1.7; color: #1f2937;">
        <div style="margin-bottom: 40px;">
          <p style="margin: 0; color: #374151; font-size: 14px;">[Your Name]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Street Address]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[City, State ZIP Code]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Email Address]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Phone Number]</p>
        </div>

        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #4b5563; font-size: 14px;">[Date]</p>
        </div>

        <div style="margin-bottom: 30px;">
          <p style="margin: 0; color: #374151; font-size: 14px;">[Recipient Name]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[Recipient Address]</p>
          <p style="margin: 3px 0; color: #4b5563; font-size: 14px;">[City, State ZIP Code]</p>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="margin: 0; color: #1f2937; font-size: 15px;">Dear [Recipient Name],</p>
        </div>

        <div style="margin-bottom: 20px; text-align: justify;">
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.8; text-indent: 30px;">I hope this letter finds you in good health and high spirits. I am writing to [state the main purpose of your letter]. It has been [time period] since we last spoke, and I wanted to take this opportunity to reach out to you.</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.8; text-indent: 30px;">[Second paragraph - Provide context, background, or relevant information. Share details about the situation, event, or topic you're addressing. This is where you can elaborate on your opening statement and provide more depth to your message.]</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.8; text-indent: 30px;">[Third paragraph - Express your thoughts, feelings, or requests. This is the heart of your letter where you convey your main message. Be sincere and genuine in your expression, whether you're sharing news, making a request, or simply maintaining a connection.]</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.8; text-indent: 30px;">[Fourth paragraph - Provide any additional details, clarifications, or supporting information. You might want to mention specific examples, share anecdotes, or offer further explanation of your main points. This paragraph helps to strengthen your message and provide completeness to your letter.]</p>
          
          <p style="margin: 0 0 18px 0; color: #374151; font-size: 15px; line-height: 1.8; text-indent: 30px;">I would greatly appreciate [specific action or response you're seeking]. Please feel free to contact me at [phone/email] if you have any questions or would like to discuss this further. Your time and consideration are much appreciated.</p>
          
          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.8; text-indent: 30px;">Thank you for taking the time to read this letter. I look forward to hearing from you soon and hope that [express positive wish or expectation].</p>
        </div>

        <div style="margin-top: 40px;">
          <p style="margin: 0; color: #1f2937; font-size: 15px;">Warmest regards,</p>
          <p style="margin: 50px 0 0 0; color: #1f2937; font-size: 15px;">[Your Name]</p>
        </div>

        <div style="margin-top: 35px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #9ca3af; font-size: 12px; font-style: italic; text-align: center;">
            [Optional: Add a personal note or P.S. here]
          </p>
        </div>
      </div>
    `,
  },
]
