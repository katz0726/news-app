import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { ListItem } from './src/components/ListItem';
import { Article } from './src/type/Article';

const articles: Article[] = [
  {
    author: 'World Nature News',
    title: '世界自然保護団体、森林の二酸化炭素削減効果について研究結果を発表',
    imageUrl: 'https://picsum.photos/id/10/200/200',
    publishedAt: '2019-05-22T06:14:23Z',
  },
  {
    author: 'Fun Fun Travel',
    title:
      '今年の連休、人気の海外旅行先は？20代にアンケート調査。1位は意外なあの国!?',
    imageUrl: 'https://picsum.photos/id/13/200/200',
    publishedAt: '2019-05-22T05:42:23Z',
  },
  {
    author: 'Biz News',
    title:
      '世界の有名IT企業も実践するマインドフルネス。日本の企業でも続々と導入事例。',
    imageUrl: 'https://picsum.photos/id/17/200/200',
    publishedAt: '2019-05-21T15:33:23Z',
  },
  {
    author: 'My Times',
    title: '中学受験はいつから始めればよい？お受験経験者に聞いたその実態。',
    imageUrl: 'https://picsum.photos/id/20/200/200',
    publishedAt: '2019-05-21T14:02:23Z',
  },
  {
    author: '経済ニュース',
    title: 'リストラ数は前年比5%増。大手企業が早期退職者を募集する理由。',
    imageUrl: 'https://picsum.photos/id/22/200/200',
    publishedAt: '2019-05-21T11:55:23Z',
  },
  {
    author: 'Biz News',
    title:
      '100人のインタビューから見えた「年収1000万」のビジネスマンが必ず読んでる本ベスト10。',
    imageUrl: 'https://picsum.photos/id/24/200/200',
    publishedAt: '2019-05-21T11:42:23Z',
  },
  {
    author: 'Movie News',
    title: 'ハリウッドスターの愛用する「一流ガジェット」たち',
    imageUrl: 'https://picsum.photos/id/26/200/200',
    publishedAt: '2019-05-21T10:32:23Z',
  },
  {
    author: 'Get Sports',
    title: '70歳登山家がエベレスト登頂に挑戦。地元の期待膨らむ。',
    imageUrl: 'https://picsum.photos/id/29/200/200',
    publishedAt: '2019-05-21T10:02:23Z',
  },
  {
    author: 'My Life',
    title: '銀座に新たなコンセプトのコーヒーショップがオープン',
    imageUrl: 'https://picsum.photos/id/30/200/200',
    publishedAt: '2019-05-19T09:02:23Z',
  },
  {
    author: 'Weather now',
    title: '気になる週末の天気。関東地方の天気は概ね晴れ。',
    imageUrl: 'https://picsum.photos/id/38/200/200',
    publishedAt: '2019-05-19T09:01:23Z',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.imageUrl}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
