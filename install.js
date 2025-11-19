module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/cocktailpeanut/ai-video-composer app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install pydantic==2.10.6 huggingface_hub==0.36"
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
