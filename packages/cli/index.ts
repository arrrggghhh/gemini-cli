#!/usr/bin/env node

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Suppress deprecation warnings when GEMINI_SUPPRESS_WARNINGS=true
declare global {
  namespace NodeJS {
    interface Process {
      noDeprecation?: boolean;
    }
  }
}
if (process.env.GEMINI_SUPPRESS_WARNINGS === 'true') {
  process.noDeprecation = true;
}

import './src/gemini.js';
import { main } from './src/gemini.js';

// --- Global Entry Point ---
main().catch((error) => {
  console.error('An unexpected critical error occurred:');
  if (error instanceof Error) {
    console.error(error.stack);
  } else {
    console.error(String(error));
  }
  process.exit(1);
});
