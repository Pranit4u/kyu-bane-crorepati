import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Popover from '@mui/material/Popover'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
 
import Image from 'next/image'
import { useState } from 'react'
 
const AIAnswerSources = props => {
  const { sources, setShowDescription } = props
 
  const uniqueContentTypes = new Set()
  const [viewSourcesPopoverAnchorEl, setViewSourcesPopoverAnchorEl] = useState(null)
 
  const theme = useTheme()
 
  const sourceIconImage = (path, key) => <Image src={path} width={25} height={25} key={key} />
 
  const renderSourceIcon = (contentType, key) => {
    //sources include contentType values represented by numbers coming from openai.proto
    switch (contentType) {
      case 0:
        return sourceIconImage('/images/icons/aiTools/sources/PdfIcon.svg', key)
      case 1:
        return sourceIconImage('/images/icons/aiTools/sources/WordDocIcon.svg', key)
      case 2:
        return sourceIconImage('/images/icons/aiTools/sources/ExcelIcon.svg', key)
      case 3:
        return sourceIconImage('/images/icons/aiTools/sources/PptIcon.svg', key)
      case 4:
        return sourceIconImage('/images/icons/aiTools/sources/TextIcon.svg', key)
    }
  }
 
  const sourceItems = (source, key) => (
    <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }} key={key}>
      {renderSourceIcon(source.contentType)}
      {source.downloadUrl ? (
        <Link
          href={source.downloadUrl}
          variant='caption'
          rel='noopener noreferrer'
          target='_blank'
          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '180px' }}
        >
          {source.name}
        </Link>
      ) :(
        <Link
        variant='caption'
        onClick={() => setShowDescription(true)}
        >
        Product Info (Description and Features)
        </Link>
      )}
    </Stack>
  )

  const filteredSources = sources.filter(source => source.downloadUrl || (source.contentType === 4 && source.name.includes('generated')) )
 
  if (filteredSources?.length) {
    return (
      <>
        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
          <Link
            variant='caption'
            sx={{ cursor: 'pointer' }}
            onClick={e => setViewSourcesPopoverAnchorEl(e.currentTarget)}
          >
            <Typography variant='body1' color={theme.palette.primary.main}>
              Sources ({filteredSources.length}):
            </Typography>
          </Link>
          {filteredSources.map((val, ind) => {
            if (!uniqueContentTypes.has(val.contentType)) {
              uniqueContentTypes.add(val.contentType)
              return renderSourceIcon(val.contentType, ind)
            }
          })}
        </Stack>
        <Popover
          anchorEl={viewSourcesPopoverAnchorEl}
          open={Boolean(viewSourcesPopoverAnchorEl)}
          onClose={() => setViewSourcesPopoverAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        >
          <Card variant='outlined' sx={{ boxShadow: 0 }}>
            <CardContent sx={{ pt: 2, pb: 0, pl: 4, pr: 8 }}>
              {filteredSources.map((source, ind) => (
                <Box key={ind} sx={{ mt: 2 }}>
                  {sourceItems(source, ind)}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Popover>
      </>
    )
  }
}
 
export default AIAnswerSources