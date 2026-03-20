# AIML-501 Assignment 3: LLM Training Process and Infrastructure

## Explanatory Document

This graphic explains the full training lifecycle of a large language model, starting with raw text collection and ending with deployment. The main stages are data collection, preprocessing and tokenization, large-scale pretraining, fine-tuning and alignment, evaluation, and production deployment.

The graphic also highlights the main resources that shape LLM development. These include dataset scale, computational power, energy consumption, training time, and total cost. Rather than treating cost as a single isolated number, the artifact shows that cost is the result of all of these categories interacting across the training and deployment process.

To make the topic more concrete, the graphic compares GPT-4, Claude 3.7 Sonnet, and Llama 3.1 405B. One of the main findings is that public disclosure is uneven. Llama provides the clearest publicly shared training signals, while GPT-4 and Claude are much more limited in what they disclose about dataset size, compute, and total training cost.

One key consideration is that frontier model training is not fully transparent. For that reason, the artifact distinguishes between official disclosures and third-party estimates instead of presenting uncertain values as confirmed facts.

Another important consideration is accessibility. The page was designed to be readable by mixed audiences, including readers who may not already be familiar with transformers or large-scale model training. The content is grouped into process, resources, and model examples so the reader can build understanding step by step instead of reading one long technical explanation.

I chose an infographic-style layout instead of a slide deck because it works better inside the portfolio site and allows the artifact to function as both a visual and a reference page. The layout uses repeated card patterns, simple resource bars, and a clear pipeline sequence so the page stays structured and easy to scan.

I also created a separate graphic view at `/aiml-501/artifacts/llm-training-infrastructure/graphic` so the visual can be captured cleanly as a standalone image if needed for submission. That route condenses the most important information into one export-friendly layout without requiring the full artifact page.

The recommended way to generate the image is:

1. Open `/aiml-501/artifacts/llm-training-infrastructure/graphic` in the browser.
2. Set browser zoom to `100%`.
3. Use a full-page screenshot or built-in browser capture tool.
4. If a single PNG is not required, print the page to PDF as a fallback.

## Reflection

I put this artifact together for readers who need a clearer picture of what sits behind a large language model besides the final chatbot interface. For me, this topic makes more sense when the steps are laid out as a process, so I used an infographic-style structure instead of writing it as one long explanation. That made it easier to connect the training stages with the actual resource categories like data, compute, energy, time, and cost.

What stood out to me while building it was how uneven public disclosure is across models. GPT-4 and Claude are widely known, but once I looked for concrete training-resource details, a lot of that information simply was not public. Llama was much more useful as a comparison point because Meta published clearer signals about token count and GPU-hours, and that contrast became one of the main takeaways of the artifact.

Most of my revisions were about making the page easier to scan without oversimplifying the topic. I tightened the training pipeline, grouped the resource categories more clearly, and made the model comparison honest about what is and is not publicly disclosed. That felt more useful than forcing exact numbers where the sources did not support them.
