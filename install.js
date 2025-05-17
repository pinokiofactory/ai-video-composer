module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/cocktailpeanut/ai-video-composer app",
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install pydantic==2.10.6"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "ollama pull {{env.MODEL}}"
      }
    }
  ]
}
