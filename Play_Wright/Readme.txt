To Run 
npx playwright test tests/ui/spec/TestWithPOM.spec.ts



help

# install deps if you haven’t already
npm install

# run all tests
npx playwright test

# or run a specific spec file
npx playwright test tests/ui/spec/TestWithPOM.spec.ts

# headful / debug mode
npx playwright test --headed --debug