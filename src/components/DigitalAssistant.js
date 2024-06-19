import React from 'react';
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

const DigitalAssistant = () => {
  return (
    <div>
    <CopilotKit publicApiKey="AIzaSyDPRXZ94gXnpCMwsKb2Cz8eecRHDYA-7Iw">
      <CopilotSidebar>
        Hello
      </CopilotSidebar>
    </CopilotKit>
  );
    </div>
  )
}

export default DigitalAssistant