<template>
  <QScrollArea class="fit">
    <QList padding>
      <QItem v-ripple clickable to="/">
        <QItemSection avatar>
          <QIcon name="home" />
        </QItemSection>

        <QItemSection>
          <QItemLabel>Home</QItemLabel>
        </QItemSection>
      </QItem>

      <QItem v-ripple clickable to="/recipes">
        <QItemSection avatar>
          <QIcon name="menu_book" />
        </QItemSection>

        <QItemSection>
          <QItemLabel>Recipes</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QScrollArea>
</template>
