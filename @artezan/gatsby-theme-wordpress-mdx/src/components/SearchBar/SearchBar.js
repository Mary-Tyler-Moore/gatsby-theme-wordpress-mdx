/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Downshift from 'downshift'
import { Styled, jsx, css, Flex } from 'theme-ui'

import { ButtonIcon, ButtonIconSimple } from '../ButtonIcon'

export const SearchBar = ({ filterData, onSearch }) => {
  const [selectedItems, setSelectedItems] = useState([])

  const removeItem = selectedItem => {
    const arr = selectedItems.filter(
      ({ value }) => value !== selectedItem.value
    )
    setSelectedItems(arr)
  }
  const handleCahange = selectedItem => {
    if (selectedItems.some(({ value }) => value === selectedItem.value)) {
      removeItem(selectedItem)
    } else {
      setSelectedItems([...selectedItems, selectedItem])
    }
  }

  useEffect(() => {
    onSearch(selectedItems)
  }, [selectedItems])

  return (
    <Styled.div>
      <Downshift
        stateReducer={stateReducer}
        onChange={handleCahange}
        selectedItem={null}
        itemToString={item => (item ? item : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          toggleMenu,
          inputValue,
          clearSelection,
          selectedItem,
          highlightedIndex,
          getRootProps,
          abc
        }) => (
          <div>
            <Styled.div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row'
              }}
            >
              {selectedItems.length > 0
                ? selectedItems.map(item => (
                    <Styled.div
                      key={item.value}
                      sx={{
                        display: 'flex',
                        ml: 2,
                        mb: 1
                      }}
                    >
                      <Styled.div
                        sx={{
                          appearance: 'none',
                          display: 'inline-block',
                          textAlign: 'center',
                          lineHeight: 'inherit',
                          textDecoration: 'none',
                          fontSize: 'inherit',
                          fontWeight: 'bold',
                          m: 0,
                          px: 1,
                          border: 0,
                          borderRadius: 4,
                          bg: 'primary',
                          color: 'background',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span>{item.value}</span>
                        <ButtonIconSimple
                          onClick={() => removeItem(item)}
                          aria-label="clear selection"
                          iconPath="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        />
                      </Styled.div>
                    </Styled.div>
                  ))
                : ''}
            </Styled.div>

            <div style={{ position: 'relative' }}>
              <Styled.div
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                {...getRootProps({}, { suppressRefError: true })}
              >
                <input
                  sx={{
                    backgroundColor: 'muted',
                    display: 'flex',
                    flexBasis: '100%',
                    outline: 'none',
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: 'background',
                    borderRadius: 2,
                    appearance: 'none',
                    p: 3,
                    mr: 2,
                    fontFamily: 'body',
                    fontSize: 2,
                    color: 'inherit',
                    '::placeholder': {
                      color: 'textMuted'
                    },
                    ':focus ': {
                      boxShadow: theme =>
                        `${theme.shadows[1]} ${theme.colors.textMuted}`
                    }
                  }}
                  {...getInputProps({
                    placeholder: 'Search Tags',
                    onClick: () => toggleMenu(),
                    onKeyDown(e) {
                      if (e.key === 'Enter' && highlightedIndex === null) {
                        return selectedItem
                          ? onSearch(selectedItem.value)
                          : null
                      }
                    }
                  })}
                />

                {selectedItem ? (
                  <ButtonIcon
                    onClick={clearSelection}
                    aria-label="clear selection"
                    iconPath="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                ) : (
                  <ButtonIcon
                    {...getToggleButtonProps()}
                    iconPath={
                      isOpen
                        ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'
                        : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'
                    }
                  />
                )}
              </Styled.div>
              <Styled.div
                sx={{
                  backgroundColor: 'muted',
                  borderRadius: 1,
                  zIndex: 2,
                  mt: 3
                }}
              >
                <Styled.div>
                  <ul
                    {...getMenuProps()}
                    sx={{
                      m: 0,
                      pl: 0,
                      maxHeight: isOpen ? '310px' : '0px',
                      overflowY: 'scroll',
                      WbkitOverflowScrolling: 'touch',
                      borderRadius: 1
                    }}
                  >
                    {isOpen
                      ? filterData
                          .filter(
                            item =>
                              !inputValue || item.value.includes(inputValue)
                          )
                          .map((item, index) => (
                            <Styled.li
                              {...getItemProps({
                                key: item.value,
                                index,
                                item
                              })}
                              sx={{
                                color:
                                  highlightedIndex === index ||
                                  selectedItems.some(
                                    ({ value: itemSel }) =>
                                      itemSel === item.value
                                  )
                                    ? 'text'
                                    : 'textMuted',
                                cursor: 'pointer',
                                p: 3,
                                margin: 0,
                                borderBottomStyle: 'solid',
                                borderBottomWidth: 0,
                                borderColor: 'background',
                                listStyle: 'none',

                                ':hover': {
                                  backgroundColor: 'muted'
                                }
                              }}
                            >
                              {item.value}
                            </Styled.li>
                          ))
                      : null}
                  </ul>
                </Styled.div>
              </Styled.div>
            </div>
          </div>
        )}
      </Downshift>
    </Styled.div>
  )
}

const stateReducer = (state, changes) => {
  console.log('state', state)
  console.log('changes', changes)
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      console.log('HERE')
      return {
        ...changes,
        highlightedIndex: state.highlightedIndex,
        isOpen: true,
        inputValue: ''
      }
    default:
      return changes
  }
}
