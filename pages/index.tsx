import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Draggable from 'react-draggable'
import { HoverCard, Button, Text, Group } from '@mantine/core';
import map from './../public/map.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interactive Voyage of The Beagle Map</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Draggable>
              <div style={
                  {
                      position: 'absolute',
                      width: '2560px',
                      height: '1080px',
                      backgroundImage: `url(${map.src})`,
                  }
              }
              className={styles.map}
              >
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      Charles Darwin set sail on the ship HMS Beagle on December 27, 1831, from Plymouth, England. Darwin was 22 years old when he was hired to be the ship’s naturalist.
                                  </Text>
                                  <Image src={'/darwin.jpg'} alt={'Charles Darwin'} width={179} height={270} />
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Tenerife} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      January 1832.
                                      Darwin has dreamed of visiting Tenerife for a year, but a cholera quarantine forces the Beagle to pass without stopping.                                  </Text>
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Bahia} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>

                                      February 1832.
                                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                                      Darwin explores Brazilian rain forests for the first time. "Here I first saw a tropical forest in all its sublime grandeur...I never experienced such intense delight."
                                    </Text>
                                  </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Rio} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      February 1832.
                                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                                      Darwin spent months in Rio de Janeiro studying 'gaily coloured' flatworms and spiders. It was here that Darwin would find evidence against the beneficent design of nature.                          </Text>
                              <Image src={'/rio.jpg'} alt={'Rio de Janeiro'} width={179} height={270} />
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Montevideo} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      Darwin sailed from Rio de Janeiro on July 5, 1832, for the Plata and anchored at Montevideo on July 26. For more than a year the ship was employed in surveying the extreme southern and eastern coasts of South America.
                                    </Text>
                                  </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Valparaiso} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      After two years years in Atlantic waters, the Beagle rounded the cape and entered the Pacific Ocean on the 11th of June 1834. The ship and her crew arrived at Valparaiso, Chile, on the 23rd of July. It was from here that Darwin began his first expedition into the Andes Mountains.
                                  </Text>
                                    <Image src={'/valparaiso.jpg'} alt={'Valparaiso'} width={179} height={270} />
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Lima} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      While in Peru, Darwin would find marine evidence which would later lead him to understand that geological movement and uplifting, would result in sinking islands and formation of coral reefs.                                  </Text>
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Sydney} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      In and around Sydney, Darwin and his servant Syms Covington collected at least 110 species of animals.
                                  </Text>
                                  <Image src={'/sydney.jpg'} alt={ 'Sydney'} width={200} height={200} />
                                  </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Hobart} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      Darwin arrived in Hobart Town on Friday, February 5th, 1836. Darwin was impressed by the gum trees and tree ferns. He collected 133 different types of insects, including adaptive dung beetles, flat worms, and other animals. He sailed out on February 17th.                                  </Text>
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Sound} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      Darwin walked many miles around the settlement of King George Sound examining the geology and collecting natural history specimens including 48 previously unknown species of insect. He was impressed with the Aboriginal people: their ‘good disposition’ and willingness to work.
                                    </Text>
                              </Group>
                              </HoverCard.Dropdown>
                      </HoverCard>
                  </div>
                  <div>
                      <HoverCard width={280} shadow="md">
                          <HoverCard.Target>
                              <Button className={styles.marker_Cape} color="blue" variant="filled">
                              </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                              <Group position="center">
                                  <Text size="xl" weight={500} className={styles.text}>
                                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                                      Darwin had a positive impression of the town and Table Mountain during his two weeks stay in June 1836. He compared Cape Colony favorably to other parts of the southern hemisphere and concluded that it was a "little embryo England" that was developing. The Cape Colony was also influenced by the international intellectual and political currents of its time.
                                  </Text>
                              </Group>
                          </HoverCard.Dropdown>
                      </HoverCard>
                  </div>


              </div>
            </Draggable>
      </main>
    </div>
  )
}
