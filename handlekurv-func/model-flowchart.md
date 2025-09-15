# Model Flowchart

Below is a graphical flowchart representation of the logic in `model.ts`.


```mermaid
flowchart TD
    A([Start])
    B{Is product in cart?}
    C[[Increase quantity]]
    D[[Add product to cart]]
    E[[Update cart total]]
    F{Remove product?}
    G[[Decrease quantity or remove]]
    H[[Continue shopping]]
    I([End])

    A --> B
    B -- Yes --> C
    B -- No --> D
    C --> E
    D --> E
    E --> F
    F -- Yes --> G
    F -- No --> H
    G --> E
    H --> I
```

---

This flowchart visualizes the main decision points and actions for managing a shopping cart model. You can view this diagram using any Markdown viewer that supports Mermaid diagrams.