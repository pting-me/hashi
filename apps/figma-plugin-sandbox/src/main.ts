import {
  createHandleMessageFromView,
  getComponentNodes,
  getComponentSetNodes,
  postMessageToView,
} from '@kagami/sandbox-features';

figma.showUI(__html__, { themeColors: true, width: 240, height: 427 });

postMessageToView({
  type: 'setComponentSetNodes',
  payload: getComponentSetNodes(),
});

postMessageToView({
  type: 'setComponentNodes',
  payload: getComponentNodes(),
});

figma.ui.onmessage = createHandleMessageFromView(console.log);
