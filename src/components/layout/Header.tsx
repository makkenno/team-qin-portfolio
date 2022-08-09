import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Container,
  Group,
  Text,
  ActionIcon,
  createStyles,
  useMantineColorScheme,
  Stack,
  Modal,
  MediaQuery,
  Burger,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'

import { navItems } from '@/constants/page'

const useStyles = createStyles((theme) => ({
  logo: {
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    fontSize: '18px',
  },
  icon: {
    borderColor: theme.colors.dark[0],
  },
  link: {
    textDecoration: 'none',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    fontSize: '18px',
  },
  modal: {
    '.mantine-Modal-modal': {
      backgroundColor: theme.colors.pink[6],
      paddingTop: '90px',
    },
  },
  modalLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '28px',
    fontWeight: 700,
    fontFamily: theme.fontFamilyMonospace,
  },
}))

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme])
  const { classes } = useStyles()

  return (
    <>
      <Container size="lg" py={20}>
        <Group position="apart">
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Burger
              color={opened || isDark ? '#fff' : 'black'}
              opened={opened}
              onClick={() => setOpened((x) => !x)}
              sx={{
                zIndex: 1000,
              }}
            />
          </MediaQuery>
          <Text className={classes.logo}>Shimabu IT University</Text>
          <Group>
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Group>
                {navItems.map((item, i) => (
                  <Link key={i} href={item.href} passHref>
                    <a className={classes.link}>{item.title}</a>
                  </Link>
                ))}
              </Group>
            </MediaQuery>
            <ActionIcon
              variant="outline"
              radius={8}
              onClick={() => toggleColorScheme()}
              sx={(theme) => ({
                color: isDark ? theme.white : theme.colors.dark[6],
              })}
            >
              {isDark ? (
                <IconSun size={16} className={classes.icon} />
              ) : (
                <IconMoon size={16} className={classes.icon} />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        className={classes.modal}
        fullScreen
      >
        <Stack>
          {navItems.map((item, i) => (
            <Link key={i} href={item.href} passHref>
              <a className={classes.modalLink}>{item.title}</a>
            </Link>
          ))}
        </Stack>
      </Modal>
    </>
  )
}
