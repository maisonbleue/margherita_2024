# Margarita Dance Party

Welcome to *Margarita Dance Party*! This project was created during the Lensathon at Snapchat HQ using the newly released Snapchat Spectacles. *Margarita Dance Party* is an immersive AR experience that teaches users 80s dance moves with the help of a 3D model of fitness legend Richard Simmons.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Configuration](#configuration)
- [Team](#team)
- [License](#license)

## About

*Margarita Dance Party* transports users back to the 1980s, offering interactive dance lessons where users follow a 3D model of Richard Simmons performing various moves. Users can mirror the moves in real time and improve their dancing skills while having fun. 

The experience is built for the new **Snapchat Spectacles**, leveraging AR to create an engaging and nostalgic environment.

## Features
- **Custom 3D Models & Animations**: A custom-made 3D model of Richard Simmons, along with animations, guides users through each dance move.
- **Hand Clap Detection**: The experience detects when users clap their hands in sync with the music.
- **Custom Music Track**: A nostalgic 80s-inspired soundtrack to keep the energy up.
- **VFX Effects**: Dynamic particle effects to enhance the overall experience.
- **LLM Integration**: OpenAI's GPT is integrated for text-to-speech and speech-to-text functionality, allowing for immersive interaction with the experience.
- **Real-time Feedback**: The user’s movements are monitored for live feedback and guidance.

## Installation

### Prerequisites

- **Lens Studio**: Download and install the latest version from [here](https://lensstudio.snapchat.com/).
- **Snapchat Spectacles**: Ensure you have the latest Spectacles and they are paired with Lens Studio.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/margarita-dance-party.git
    ```
2. Open **Lens Studio** and import the project.
3. Follow Lens Studio instructions to sync and deploy the Lens to your Spectacles.

## Usage

1. Wear the Snapchat Spectacles.
2. Start the experience through the Lens Studio preview or deploy the project to Spectacles.
3. Follow the 3D model of Richard Simmons to learn 80s dance moves!
4. Use the UI buttons for additional control:
   - **Start/Stop**: Begin or pause the lesson.
   - **Next Move**: Skip to the next dance move.
   - **Repeat Move**: Practice the current move again.
   - **Speed Control**: Toggle between normal and slow-motion speed.
   - **Voice Commands**: Interact with the app using speech for an even more immersive experience.

## Technologies
- **Snapchat Spectacles**: For real-world AR interaction.
- **Lens Studio**: For building and deploying the AR experience.
- **Character Creator 4**: For creating the 3D model of Richard Simmons.
- **OpenAI API**: For generating speech-to-text and text-to-speech capabilities.
- **Custom VFX**: Particle effects created within Lens Studio.

## Configuration

To enable the **OpenAI GPT integration**, you need to add your **OpenAI API key** to the Lens project.

1. Open the project in **Lens Studio**.
2. Navigate to the **Scene** panel and find the following path:
   ```
   voice_command/VoiceCommandUI/Manager
   ```
3. Select the **Manager** object.
4. In the **Inspector Panel**, find the **ProjectManager** component.
5. Paste your **OpenAI API key** into the appropriate field in the component.

Once done, the app will be able to use GPT for text-to-speech and speech-to-text functionality, providing users with a more immersive interaction experience.

## Team
- **Vincent**
- **Piota Boa**
- **Ralph Barbagallo**
- **Brielle Garcia**
- **Sara Orfali**

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
