docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v4.3.1 generate \
  -i /local/openapi.yaml \
  -g typescript-angular \
  -c local/config.yaml \
              --git-user-id "chatbot-pf" \
              --git-repo-id "clayful-dart" \
  -o /local/sdk
