module.exports = {
    WELCOME: {
        data: {
            subject: "Welcome to {{eventName}} !",
            body: `Hi {{userName}}, Welcome to {{eventName}}!\n
            We are happy to see you on board, This is your first step of being part of {{eventName}}!\n
            On the next step, you will need to login to our platfrom and Create new team or Join existing team.\n\n
            Hackathon event is one of the best ways to meet new people, mingle and taking your career to the next step. 
            So, update your CV and get ready for our amazing event that will come up on {{eventDate}} at {{eventLocation}}!\n\n
            See you there! {{eventName}} team.`,
            mjml_body: `<mjml>
  <mj-head>
    <mj-title>
      User Request
    </mj-title>
  </mj-head>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-image padding-top="30px" width="200px" height="270px" src="{{websiteAddress}}/dist/images/logo.png" />
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-text>
            <h2 style="margin-top:-10px;">
              Hi {{userName}}, Welcome to {{eventName}}!
            </h2>
          </mj-text>
          <mj-text>
            <p style="margin-top: -10px;">
             We are happy to see you on board, This is your first step of being part of {{eventName}}!
            </p>
            <p>
              On the next step, you will need to login to our platfrom and Create new team or Join existing team.
            </p>
            <p>
              Hackathon event is one of the best ways to meet new people, mingle and taking your career to the next step. So, update your CV and get ready for our amazing event that will come up on {{eventDate}} at {{eventLocation}}!
            </p>

            <p>
              See you there!
              {{eventName}} team.
            </p>
          </mj-text>
          <mj-button font-family="Helvetica" background-color="#e5a552" color="white" href="{{websiteAddress}}/updateTeam"> Update your team now

          </mj-button>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" />
          <mj-text>
            <p style="margin-top: -15px; text-align:center">
              {{eventName}} 2017, all rights reserved.
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`
        }
    },
    USER_EMAIL_TYPES: {
        APPLIED_YES: {
            data: {
                subject: "You have been approved!",
                body: `Yay! {{teamLeader}} approved your request, and now your are a part of {{teamName}} team!\n
                Now the pressure is on you, will you be the one that gives that team what it needs to be the winner?\n\n
                See you at the {{eventName}} event!\n\n
                Cheers, {{eventName}} team.`,
                mjml_body: `<mjml>
  <mj-head>
    <mj-title>
      MTA Hack
    </mj-title>
  </mj-head>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-image padding-top="30px" width="200px" height="270px" src="{{websiteAddress}}/dist/images/logo.png" />
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-text>
            <h2 style="margin-top:-10px;">
              Hi {{userName}},
            </h2>
          </mj-text>
          <mj-text>
            <p style="margin-top: -10px;">
             Yay! {{teamLeader}} approved your request, and now your are a part of {{teamName}} team!!
            </p>
            <p>
              Now the pressure is on you, will you be the one that gives that team what it needs to be the winner?
            </p>
            <p>
              See you at the {{eventName}} event!
            </p>
            <p>Cheers, {{eventName}} team.</p>
          </mj-text>
          <mj-button font-family="Helvetica" background-color="#e5a552" color="white" href="{{websiteAddress}}/updateTeam"> Update your team now

          </mj-button>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" />
          <mj-text>
            <p style="margin-top: -15px;">
              MTA Hack 2017
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`
            }
        },
        APPLIED_NO: {
            data: {
                subject: "Your request for a team was declined",
                body: `Hi {{userName}}
                "Sometimes it takes time to find a true match"\n\n
                Unfortunately, {{teamLeader}} decided to look for other teammates.\n\n
                Don't give up! it's never too late to join a team, login to our Hackathon Platform and look for other open teams.\n\n
                If the passion is in you, we will sure you find a good team match!\n\n
                Best regards, {{eventName}} team.`,
                mjml_body: `<mjml>
  <mj-head>
    <mj-title>
      MTA Hack
    </mj-title>
  </mj-head>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-image padding-top="30px" width="200px" height="270px" src="{{websiteAddress}}/dist/images/logo.png" />
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-text>
            <h2 style="margin-top:-10px;">
              Hi {{userName}},
            </h2>
          </mj-text>
          <mj-text>
            <p style="margin-top: -10px;">
           "Sometimes it takes time to find a true match"
            </p>
            <p>Unfortunately, {{teamLeader}} decided to look for other team mates. </p>
            <p>
              It's never too late to join a team, login to our Hackathon Platform and look for other open teams.
            </p>
            <p>
              If the passion is in you, we will sure you find a good team match!
            </p>
            <p>Best regards, {{eventName}} team.</p>
          </mj-text>
          <mj-button font-family="Helvetica" background-color="#e5a552" color="white" href="{{websiteAddress}}/updateTeam"> Update your team now

          </mj-button>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" />
          <mj-text>
            <p style="margin-top: -15px;">
              MTA Hack 2017
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`
            }
        }
    },
    TEAM_LEADER_EMAIL_TYPES: {
        USER_APPLIED_TO_TEAM: {
            data: {
                subject: `MTA Hack 2017 - User applied to your team! `,
                body: `Hello {{teamLeader}},\n
                {{applierName}} wants to join your team!\n\n
                Please accept or reject {{applierName}} as soon as possible.
                \nThanks!\n\n{{websiteAddress}}/updateTeam`,
                mjml_body: `<mjml>
  <mj-head>
    <mj-title>
      MTA Hack 2017
    </mj-title>
  </mj-head>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-image padding-top="30px" width="200px" height="270px" src="{{websiteAddress}}/dist/images/logo.png" />
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-text>
            <h2 style="margin-top:-10px;">
              Hi {{teamLeader}},
            </h2>
          </mj-text>
          <mj-text>
            <p style="margin-top: -10px;">
              {{applierName}} wants to join your team!
            </p>
            <p>
              Please accept or reject {{applierName}} as soon as possible.
            </p>
            <p>
              Thanks!
            </p>
          </mj-text>
          <mj-button font-family="Helvetica" background-color="#e5a552" color="white" href="{{{websiteAddress}}/updateTeam"> Update your team now

          </mj-button>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" />
          <mj-text>
            <p style="margin-top: -15px;">
              MTA Hack 2017
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`
            }
        }
    }
};

