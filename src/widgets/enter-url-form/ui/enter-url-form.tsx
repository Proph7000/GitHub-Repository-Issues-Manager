import { Row, Col, Input, Button, Typography } from 'antd'
import { Controller } from 'react-hook-form'

import { useIssuesStore } from '@entities/model'

import { useDownloadIssues, useEnterUrlForm } from '../model'

const { Text } = Typography

export function EnterUrlForm() {
  const repoInfo = useIssuesStore((state) => state.repoInfo)
  const { control, getValues, handleSubmit } = useEnterUrlForm()

  const { handleDownloadIssues, handleResetStore } = useDownloadIssues(() =>
    getValues('url')
  )

  return (
    <Col span={24}>
      <form
        onSubmit={handleSubmit(handleDownloadIssues)}
        style={{ width: '100%' }}
      >
        <Row gutter={16}>
          <Col span={16}>
            <Controller
              control={control}
              name="url"
              render={({ field, fieldState }) => (
                <>
                  <Input
                    {...field}
                    ref={field.ref}
                    status={fieldState.error ? 'error' : ''}
                    placeholder="Enter URL with the GitHub repo issues"
                    onPressEnter={handleDownloadIssues}
                  />

                  {!!fieldState.error && (
                    <Text type="danger">{fieldState.error?.message}</Text>
                  )}
                </>
              )}
            />
          </Col>

          <Col span={8}>
            <Row style={{ gap: 8 }}>
              <Button
                type="primary"
                onClick={handleDownloadIssues}
                htmlType="submit"
                style={{ flex: 1 }}
              >
                Load issues
              </Button>

              {repoInfo && (
                <Button onClick={handleResetStore} style={{ flex: 1 }}>
                  {`Reset ${repoInfo.repoName} store`}
                </Button>
              )}
            </Row>
          </Col>
        </Row>
      </form>
    </Col>
  )
}
