import postcssPresetEnv from 'postcss-preset-env';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssMixins from 'postcss-mixins';
import postcssReporter from 'postcss-reporter';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

const postcssConfig = {
    plugins: [
        autoprefixer(),
        postcssImport(),
        postcssPresetEnv({
            stage: 2,
            insertBefore: {
                'all-property': postcssSimpleVars
            }
        }),
        postcssNested(),
        postcssMixins(),
        cssnano({
            preset: [
                'default',
                {
                    discardComments: { removeAll: true },
                    normalizeWhitespace: true,
                    discardUnused: true,
                    mergeRules: true,
                    minifySelectors: true,
                    convertValues: false,
                    discardDuplicates: true,
                    discardOverridden: true,
                }
            ]
        }),
        postcssFlexbugsFixes(),
        postcssReporter({
            clearReportedMessages: true,
            throwError: true
        }),
        postcssFlexbugsFixes
    ]
};

module.exports = postcssConfig