const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/mauve.css';\n@import '@radix-ui/colors/grass.css';\n\n/* reset */\nbutton,\nh3 {\n  all: unset;\n}\n\n.AccordionRoot {\n  border-radius: 6px;\n  width: 300px;\n  background-color: var(--mauve-6);\n  box-shadow: 0 2px 10px var(--black-a4);\n}\n\n.AccordionItem {\n  overflow: hidden;\n  margin-top: 1px;\n}\n\n.AccordionItem:first-child {\n  margin-top: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.AccordionItem:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.AccordionItem:focus-within {\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 0 0 2px var(--mauve-12);\n}\n\n.AccordionHeader {\n  display: flex;\n}\n\n.AccordionTrigger {\n  font-family: inherit;\n  background-color: transparent;\n  padding: 0 20px;\n  height: 45px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 15px;\n  line-height: 1;\n  color: var(--grass-11);\n  box-shadow: 0 1px 0 var(--mauve-6);\n  background-color: white;\n}\n\n.AccordionTrigger:hover {\n  background-color: var(--mauve-2);\n}\n\n.AccordionContent {\n  overflow: hidden;\n  font-size: 15px;\n  color: var(--mauve-11);\n  background-color: var(--mauve-2);\n}\n.AccordionContent[data-state='open'] {\n  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n.AccordionContent[data-state='closed'] {\n  animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n\n.AccordionContentText {\n  padding: 15px 20px;\n}\n\n.AccordionChevron {\n  color: var(--grass-10);\n  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n.AccordionTrigger[data-state='open'] > .AccordionChevron {\n  transform: rotate(180deg);\n}\n\n@keyframes slideDown {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--radix-accordion-content-height);\n  }\n}\n\n@keyframes slideUp {\n  from {\n    height: var(--radix-accordion-content-height);\n  }\n  to {\n    height: 0;\n  }\n}";
export {
  styles as default
};