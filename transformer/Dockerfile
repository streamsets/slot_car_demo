ARG SDT_VERSION=latest
FROM streamsets/transformer:${SDT_VERSION}

COPY --chown=transformer:transformer ./resources/ ${TRANSFORMER_RESOURCES}/
COPY --chown=transformer:transformer ./sdc-extras/ ${STREAMSETS_LIBRARIES_EXTRA_DIR}/
COPY --chown=transformer:transformer ./patches/ ${TRANSFORMER_DIST}/streamsets-libs/
COPY --chown=transformer:transformer ./user-libs/ ${USER_LIBRARIES_DIR}/
RUN echo "sdc.base.http.url=http://transformer:19630" >> /etc/st/transformer.properties


