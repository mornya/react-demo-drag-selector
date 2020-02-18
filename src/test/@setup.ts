/*
 * @setup
 * The below code helped with mocking get/set of tests in Jest:
 */

// Sample mock of "document.doctype" for test
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
