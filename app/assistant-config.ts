export let assistantId = "asst_hBqFGpneUE2U6VSqSdQSxyuL"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
