# Accessibility Notes

## Modal Dialog

I built the modal dialog manually using React and TypeScript.

My implementation handles:
- Moving focus into the dialog when it opens.
- Trapping keyboard focus with Tab and Shift+Tab.
- Closing the dialog with Escape.
- Returning focus to the button that opened the dialog.
- Using role="dialog", aria-modal="true", and aria-labelledby.

### What shadcn/Base UI handled that I missed

1. **Accessible close-button labeling**
   My version uses visible text ("Close"), while the shadcn version supports an icon-only close button with a visually hidden "Close" label. This makes an icon-only button understandable to screen readers.

2. **Dialog structure and presentation**
   The shadcn version separates the dialog into a portal, backdrop/overlay, content, title, description, and close components. My version puts the dialog directly in the component and does not provide this reusable structure.

3. **Additional dialog accessibility behavior**
   My focus-trap logic is written manually and depends on finding focusable elements with a CSS selector. The Base UI dialog primitive handles the dialog behavior for me, reducing the amount of accessibility logic I have to maintain.

4. **Accessible description support**
   shadcn provides a DialogDescription component that can be associated with the dialog content. My implementation only connects the title with aria-labelledby and does not connect the paragraph with aria-describedby.
   ## Tabs

### What I implemented manually
I created tabs using React state to track the active tab and buttons to switch between Profile, Projects, and Contact content.

### What shadcn/Base UI handled that I missed
The shadcn/Base UI Tabs component provides reusable Tabs, TabsList, TabsTrigger, and TabsContent components. It handles keyboard navigation and accessibility behavior for tabs.

### Additional accessibility behavior
The Base UI Tabs primitive manages the active tab state and keyboard interaction, reducing the amount of accessibility logic I need to write manually.

### Styling and states
The shadcn component also provides focus-visible styles, active states, disabled states, horizontal/vertical orientation, and different visual variants.